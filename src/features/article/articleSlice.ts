import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IArticleState, SearchingArticleResult } from "../../types";
import { fetchArticles } from "./articleAPI";

const initialState: IArticleState = {
  status: "idle",
  keyword: "",
  page: 0,
  articles: {
    defaultUrl: {
      url: "defaultUrl",
      headline: "",
      text: "",
      image: "",
      bookmarked: false,
    },
  },
  totalArticles: 0,
  bookmarked: {},
};

export const selectPage = (state: RootState) => state.article.page;
export const selectArticles = (state: RootState) => state.article.articles;
export const selectKeyword = (state: RootState) => state.article.keyword;
export const selectStatus = (state: RootState) => state.article.status;
export const selectBookmarked = (state: RootState) =>
  Object.values(state.article.bookmarked);
export const selectTotalArticles = (state: RootState) =>
  state.article.totalArticles;

export const searchingArticlesAsync = createAsyncThunk(
  "article/fetchArticles",
  async (
    {
      keyword = "",
      page = 1,
    }: {
      keyword?: string;
      page?: number;
    },
    { getState }
  ): Promise<SearchingArticleResult | null> => {
    const {
      article: { keyword: oldKeyword, page: oldPage },
    } = getState() as RootState;

    if (oldKeyword === keyword && page === oldPage) {
      return null;
    }

    const { response } = await fetchArticles({ keyword, page });

    const articles = response.docs.map(
      ({ lead_paragraph, web_url, multimedia, headline }) => ({
        url: web_url,
        headline: headline.main,
        text: lead_paragraph,
        image:
          multimedia.find(({ subtype }) => subtype === "thumbLarge")?.url || "",
        bookmarked: false,
      })
    );

    return { keyword, page, articles };
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    toggleBookmark: (
      state,
      { payload: { url } }: PayloadAction<{ url: string }>
    ) => {
      const isBookmarked = Boolean(state.bookmarked[url]);

      if (isBookmarked) {
        if (state.articles[url]) {
          state.articles[url].bookmarked = false;
        } else {
          state.bookmarked[url].bookmarked = false;
        }

        delete state.bookmarked[url];
      } else {
        state.articles[url].bookmarked = true;
        state.bookmarked[url] = state.articles[url];
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(searchingArticlesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchingArticlesAsync.fulfilled, (state, action) => {
        state.status = "idle";

        if (!action.payload) {
          return;
        }

        const { keyword, articles, page } = action.payload;

        articles.forEach((article) => {
          if (state.bookmarked[article.url]) {
            article.bookmarked = true;
          }
        });

        articles.forEach((article) => {
          state.articles[article.url] = article;
        });

        const newArticles: { [key: string]: any } = {};

        articles.forEach((article) => {
          newArticles[article.url] = article;
        });

        if (state.keyword === keyword) {
          state.page = page;

          if (page === 1) {
            state.totalArticles = articles.length;
            state.articles = newArticles;
          } else {
            state.totalArticles += articles.length;
          }
        } else {
          state.page = 1;
          state.totalArticles = articles.length;
          state.articles = newArticles;
          state.keyword = keyword;
        }
      })
      .addCase(searchingArticlesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { toggleBookmark } = articleSlice.actions;

export default articleSlice.reducer;
