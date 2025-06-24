"use client";
import MovieList from "@/components/MovieList";
import { useState, useEffect, useRef } from "react";
import { getVideoList, getTypeList } from "@/services";
import { Spin, Flex } from "antd";
import Rank from "@/components/rank";
import { useDispatch, useSelector } from "react-redux";
import { setRankList } from "@/store/rankSlice";
import { useSearchParams } from "next/navigation";

interface VideoItem {
  id: number;
  name: string;
  image: string;
  type: string;
  num: string;
  hot: number;
}
interface Type {
  id: number;
  name: string;
}

interface RootState {
  rank: { list: VideoItem[] };
}

export default function Home() {
  const searchParams = useSearchParams();
  const searchKeyword = searchParams.get("search") || "";
  const [isSearching, setIsSearching] = useState(false); // 是否处于搜索模式
  const [typeList, setTypeList] = useState<Type[]>([]);
  const [videoList, setVideoList] = useState<VideoItem[]>([]);
  const [active, setActive] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { list: rankList } = useSelector((state: RootState) => state.rank);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchType = async () => {
      const res = await getTypeList();
      setTypeList(res.data);
    };

    fetchType();
  }, []);

  useEffect(() => {
    if (!searchKeyword) {
      setIsSearching(false);
      return;
    }

    const fetchSearchResults = async () => {
      const res = await getVideoList({ name: searchKeyword });
      const formattedData = res.data.map((item) => ({
        ...item,
        hot: Number(item.hot) || 0,
        num: String(item.num),
      }));
      setVideoList(formattedData);
      setIsSearching(true);
    };

    fetchSearchResults();
  }, [searchKeyword]);

  useEffect(() => {
    if (isSearching) {
      return;
    }

    if (typeList.length === 0) return;
    setLoading(true);

    const fetchVideos = async () => {
      const res = await getVideoList({
        type: typeList[active]?.name == "全部" ? "" : typeList[active]?.name,
      });

      const formattedData = res.data.map((item) => ({
        ...item,
        hot: Number(item.hot) || 0,
        num: String(item.num),
      }));

      const hotVideos = formattedData
        .filter((item) => item.hot !== 0)
        .sort((a, b) => b.hot - a.hot);

      dispatch(setRankList(hotVideos));
      setTimeout(() => {
        setVideoList(formattedData);
        setLoading(false);
      }, 200);
    };

    fetchVideos();
  }, [typeList, active, isSearching, dispatch]);

  const selectType = (index: number) => {
    setActive(index);
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null); // 添加 ref
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const lastScrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    lastScrollLeft.current = scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) / 2;
    setScrollLeft(lastScrollLeft.current + walk);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setScrollLeft(0);
  };

  return (
    <div className="w-[80%] pb-[100px] mt-[60px] mx-auto  overflow-hidden flex gap-[20px]">
      <div className="xl:w-[75%]">
        {!searchKeyword && (
          <div className="flex  items-center border-b-[1px] border-[#ccc] mt-[40px] xl:w-[87%]">
            <div className="mr-[50px] whitespace-nowrap  py-[30px]">分类</div>
            <div className="flex-1 overflow-hidden">
              <div
                className="flex items-center gap-[30px]  py-[30px]"
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                  transform: `translateX(${scrollLeft}px)`,
                  transition: "transform 0.2s linear",
                  userSelect: "none",
                }}
              >
                {typeList.map((item, index) => (
                  <div
                    className={`whitespace-nowrap cursor-pointer ${
                      active == index
                        ? "bg-orange-500 text-white px-[5px] py-[2px] rounded-[5px]"
                        : ""
                    }`}
                    key={index}
                    onClick={() => selectType(index)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-[20px]">
          {loading ? (
            <Flex justify="center">
              <Spin />
            </Flex>
          ) : (
            <MovieList list={videoList} />
          )}
        </div>
      </div>
      {!searchKeyword && (
        <div className="w-[20%] mt-[40px]">
          <Rank list={rankList} />
        </div>
      )}
    </div>
  );
}
