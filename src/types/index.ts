export interface IArticle {
  url: string;
  headline: string;
  text: string;
  image: string;
  bookmarked: boolean;
}

export interface IArticleState {
  status: "loading" | "idle" | "failed";
  keyword: string;
  page: number;
  articles: {
    [url: string]: IArticle;
  };
  totalArticles: number;
  bookmarked: {
    [url: string]: IArticle;
  };
}

export interface SearchingArticleResult {
  keyword: string;
  page: number;
  articles: IArticle[];
}
