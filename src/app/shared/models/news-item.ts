import * as moment from "moment";

export interface NewsItemResponse {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  url: string;
  type: string;
  kids?: Array<number>;
  text?: string;
}

export type NewsItem = Pick<NewsItemResponse, "by" | "title" | "text" | "url"> & { time: moment.Moment };

export type NewsTypeParam = 'topstories' | 'newstories' | 'beststories';