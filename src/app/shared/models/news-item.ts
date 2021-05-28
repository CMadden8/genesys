export interface NewsItemResponse {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  kids?: Array<number>;
  text?: string;
}

export type NewsItem = Pick<NewsItemResponse, "by" | "time" | "title" | "text">;

// export interface newsItem {
//   by: string;
//   descendants: number;
// }