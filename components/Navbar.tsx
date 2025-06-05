"use client";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const arr = ["首页", "影视"];
export default function Navbar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const handleClick = (index: number) => {
    if (index === 0) {
      router.push("/");
    }
    if (index === 1) {
      router.push("/videos");
    }
  };

  const handleSearch = () => {
    if (!keyword.trim()) return;
    router.push(`/videos?search=${encodeURIComponent(keyword)}`);
  };

  return (
    <div className="fixed top-0 left-0 h-15 w-full bg-black z-999 overflow-hidden">
      <div className="main flex items-center justify-between">
        <div className="flex h-full">
          {arr.map((item, index) => (
            <div
              className="text-white px-8 flex items-center whitespace-nowrap cursor-pointer relative group"
              key={index}
              onClick={() => handleClick(index)}
            >
              {item}
              <div className="absolute w-full h-1 bg-orange-500 left-0 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 "></div>
            </div>
          ))}
        </div>
        <div className="w-[300px] ml-[12px]">
          <Input
            placeholder="搜索"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onPressEnter={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
