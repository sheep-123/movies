import Image from "next/image";
import { Empty } from "antd";
import { useRouter } from "next/navigation";
import { PlayCircleOutlined } from "@ant-design/icons";

interface Video {
  id: number;
  image: string;
  name: string;
  type: string;
  num: string;
  hot: number;
}

interface ListProps {
  list: Video[];
}
export default function List({ list }: ListProps) {
  const router = useRouter();
  const toVideoDetail = (id: number) => {
    router.push(`/videos/detail/${id}`);
  };
  return (
    <div className="flex flex-wrap gap-[12px] justify-evenly xl:justify-start">
      {list.length > 0 ? (
        list.map((item, index) => (
          <div className="flex flex-col  gap-2" key={index}>
            <div
              className="relative w-[150px] h-[224px] rounded-md overflow-hidden group cursor-pointer"
              onClick={() => toVideoDetail(item.id)}
            >
              <Image
                src={item.image}
                alt=""
                width={150}
                height={224}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* 遮罩层 */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {/* 图标 */}
                <PlayCircleOutlined
                  className="text-white text-3xl"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
            <div className="text-center text-sm">{item.name}</div>
          </div>
        ))
      ) : (
        <div className="m-auto">
          <Empty description="暂无数据" />
        </div>
      )}
    </div>
  );
}
