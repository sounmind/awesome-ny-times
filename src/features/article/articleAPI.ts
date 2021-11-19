const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const API_KEY = process.env.REACT_APP_API_KEY;

interface Multimedia {
  subtype: "thumbLarge" | string;
  url: string;
}

interface IRawArticle {
  multimedia: [] | Multimedia[];
  lead_paragraph: string;
  headline: { main: string };
  web_url: string;
}

interface IResponse {
  status: "OK" | string;
  response: {
    docs: IRawArticle[];
  };
}

export const fetchArticles = async ({
  keyword = "",
  page = 1,
}): Promise<IResponse> => {
  const response = await fetch(
    `${BASE_URL}?api-key=${API_KEY}&q=${keyword}&page=${page}`
  );

  return response.json();
};
