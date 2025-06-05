"use client";
import Rank from "@/components/rank";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { getVideoList } from "@/services";
import * as React from "react";

interface Video {
  id: number;
  name: string;
  image: string;
  type: string;
  num: number;
  hot: string;
}
export default function Home({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  const [videoDetail, setVideoDetail] = useState<Video>({} as Video);
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await getVideoList({ id });
        setVideoDetail(res.data[0]);
      } catch (error) {
        console.error("获取视频详情失败:", error);
      }
    };

    fetchDetail();
  }, [id]);

  const { list: rankList } = useSelector((state: RootState) => state.rank);

  // 当前选中章节状态
  const [selectedEpisode, setSelectedEpisode] = useState<number>(1);

  const generateEpisodes = (num: number) => {
    return Array.from({ length: num }, (_, i) => i + 1);
  };
  const plotSummary = `
    1946年，程樯率部接管哈尔滨伪满警察局，任公安局长。当时的哈尔滨面临双重压力：盘踞在长春的国民党随时有可能进攻哈尔滨，隐藏的敌特组织、土匪恶霸、日伪人员甚至是流民无赖伺机作乱。内部，公安干部来自五湖四海，工作思路、方法不同，遇到具体问题常常产生分歧，工会与农会也在争论着谁是城市管理的主导，市领导层缺乏管理大城市的经验等等，这些都给程樯和他的战友们构成巨大的压力。国民党先后派遣在美国受过特训的高级间谍和特工潜入哈尔滨。程樯聚集了公安局各方力量，依靠基层群众，阻止了敌人的一个个阴谋。为了安定社会治安，成立邻闾委员会，健全全市外侨户口管理工作，取消妓院、烟馆和赌场。肃清了潜伏在我公安局的内鬼，破获了李兆麟将军被刺案。
  `;
  return (
    <div className="xl:w-[80%] pb-[100px] xl:mt-[60px]  mx-auto  overflow-hidden flex xl:gap-10 flex-start">
      <div className="xl:w-[70%]">
        <div className="xl:mt-[20px] mt-[70px] text-[30px] font-bold px-2">{videoDetail.name}</div>
        <video
          controls
          className="w-full xl:h-[500px] h-[300px] object-cover mt-[10px]"
        >
          <source src="/video/sp.mp4" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
        {/* 章节选择区域 */}
        <div className="mt-[30px] flex flex-wrap gap-2 flex-start px-[12px]">
          {generateEpisodes(videoDetail.num).map((episode) => (
            <button
              key={episode}
              className={`w-[80px] h-[40px] rounded bg-gray-200 ${
                episode === selectedEpisode ? "bg-orange-500 text-white" : ""
              }`}
              onClick={() => setSelectedEpisode(episode)}
            >
              第{episode}集
            </button>
          ))}
        </div>

        {/* 剧情简介 */}
        <div className="mt-[30px] px-[12px]">
          <h3 className="text-lg font-bold mb-2">剧情简介</h3>
          <p className="text-justify">{plotSummary}</p>
        </div>
      </div>

      <div className="xl:w-[20%] mt-[30px]">
        <Rank list={rankList} />
      </div>
    </div>
  );
}
