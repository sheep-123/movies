import { FireOutlined } from "@ant-design/icons";

interface RankItem {
  id: number;
  name: string;
  image: string;
  type: string;
  num: string;
  hot: number;
}
interface listProps {
  list: RankItem[];
}
export default function Home({ list }: listProps) {
  return (
    <div className="hidden xl:block ">
      <div className="border-b-[1px] border-[#eee] text-lg  pb-[10px] mb-[20px] font-bold ">
        <FireOutlined /> 榜单
      </div>
      {list.map((item, index) => (
        <div
          className="flex items-center justify-between border-b-[1px] border-dotted border-[#eee] py-[10px]"
          key={index}
        >
          <div className="flex items-center gap-[15px] ">
            <div
              className={` rounded-sm text-xs w-[18px] h-[18px] flex items-center justify-center 
      ${
        index == 0
          ? "bg-red-500 text-white"
          : index == 1
          ? "bg-orange-500 text-white"
          : index == 2
          ? "bg-yellow-500  text-white"
          : "bg-[#eee] text-black"
      }
    `}
            >
              {index + 1}
            </div>
            <div className="text-sm">{item.name}</div>
          </div>
          <div className="text-[#999] text-sm">全{item.num}集</div>
        </div>
      ))}
    </div>
  );
}
