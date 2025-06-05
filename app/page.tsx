import Image from "next/image";
import type { Metadata } from "next";
import "@/public/styles/index.scss"

export const metadata: Metadata = {
  title: "电影网站-首页",
  description: "观看最新最全的高清电影资源，支持在线播放和下载。",
  openGraph: {
    title: "电影网站-首页",
    description: "观看最新最全的高清电影资源，支持在线播放和下载。",
    images: [
      {
        url: "/bg.jpg",
        alt: "首页封面图",
      },
    ],
  },
};
export default function Home() {
  return (
    <div>
      <div className="h-[100vh] w-fill relative text-[50px] text-white mt-[60px] bg-stars">
        <div className="m1"></div>
        <div className="m2"></div>
        <div className="m3"></div>
        <div className="m4"></div>
        <div className="m5"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">电影网站</div>
      </div>
      <div className="w-full h-screen relative">
        <Image src="/bg.jpg" alt="bg" fill className="object-cover" priority />
      </div>
    </div>
  );
}
