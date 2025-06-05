import { get } from "@/helpers/request";

interface Video {
  id: number;
  name: string;
  image: string;
  type: string;
  num: number;
  hot: string;
}

interface Type {
  id: number;
  name: string;
}

type GetVideosParams =
  | { type: string }      // 按分类获取
  | { name: string }      // 搜索
  | { id: string };       // 获取详情


export const getTypeList = () => get<Type[]>("/type");
// export const getVideoList = (params: { type: string }) => get<Video[]>("/videos", { params });
// export const getVideoSearch = (params: { name: string }) => get<Video[]>("/videos", { params });
// export const getVideoDetail = (params: { id: string }) => get<Video[]>("/videos", { params });

export const getVideoList = (params: GetVideosParams) =>
  get<Video[]>("/videos", params );