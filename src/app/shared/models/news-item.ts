export interface NewsItemResponse {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  url: string;
  type: NewsType;
  kids?: Array<number>;
  text?: string;
}

export type NewsItem = Required<Pick<NewsItemResponse, "by" | "title" | "text" | "url"> & { time: string }>;

export type NewsType = 'topstories' | 'newstories' | 'beststories';

export interface NewsStoriesConfig {
  headingText: string;
  newsType: NewsType;
  limit: number;
  colClasses: string;
  showDescriptionText: boolean;
}