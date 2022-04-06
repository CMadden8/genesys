export interface NewsItemResponse {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  url: string;
  type: NewsType;
  kids?: number[];
  text?: string;
}

export type NewsItem = Required<Pick<NewsItemResponse, "by" | "title" | "text" | "url"> & { time: string }>;

export type NewsType = NewsTypeName.TOPSTORIES | NewsTypeName.NEWSTORIES | NewsTypeName.BESTSTORIES;

export interface NewsStoriesConfig {
  headingText: string;
  newsType: NewsType;
  limit: number;
  colClasses: string;
  showDescriptionText: boolean;
}

export enum NewsTypeName {
  TOPSTORIES = 'topstories',
  NEWSTORIES = 'newstories',
  BESTSTORIES = 'beststories'
}

export enum NewsHeading {
  TOPSTORIES = 'Top Stories',
  BESTSTORIES = 'Best Stories',
  RECENTSTORIES = 'Recent Stories'
}