import { NextResponse } from "next/server";
import Video from "@/models/videos";
import setJson from "@/helpers/setJson";
import { Op } from "sequelize";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // 获取所有查询参数
    const params = Object.fromEntries(searchParams.entries());

    // 定义合法参数白名单
    const validKeys = ["type", "id", "name"] as const;
    type ValidKey = (typeof validKeys)[number];

    // 过滤出有效参数
    const filteredParams = Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (validKeys.includes(key as ValidKey) && value?.trim()) {
          acc[key as ValidKey] = value;
        }
        return acc;
      },
      {} as Record<ValidKey, string>
    );

    // 构建查询条件
    const whereClause = Object.entries(filteredParams).reduce(
      (acc, [key, value]) => {
        if (key === "name") {
          acc[key] = { [Op.like]: `%${value}%` };
        } else {
          acc[key as ValidKey] = value; 
        }
        return acc;
      },
      {} as Partial<Record<ValidKey, unknown>>
    );

    const videoList = await Video.findAll({ where: whereClause });

    return NextResponse.json(setJson({ code: 1, data: videoList }));
  } catch (error) {
    console.error("获取电影失败:", error);
    return NextResponse.json(setJson({ message: "服务器错误" }), { status: 500 });
  }
}