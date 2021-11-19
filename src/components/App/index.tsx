import React, { ChangeEventHandler, useState } from "react";
import Header from "../Layout/Header";
import Layout from "../Layout";
import Articles from "../../pages/Articles";
import Bookmarks from "../../pages/Bookmarks";
import { useDispatch } from "react-redux";
import { searchingArticlesAsync } from "../../features/article/articleSlice";
import Button from "../shared/Button";

const App: React.FC = () => {
  const [isArticleView, setIsArticleView] = useState(true);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleClickView = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.getAttribute("name");

    setIsArticleView(name === "article");
  };

  const handleClickSearch = () => {
    dispatch(searchingArticlesAsync({ keyword }));
  };

  const handleChangeSearchingKeyword: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setKeyword(value);
  };

  return (
    <Layout>
      <Header>
        <input
          type="text"
          value={keyword}
          onChange={handleChangeSearchingKeyword}
          placeholder="검색어를 입력하세요"
        />

        <Button width="20%" name="search" onClick={handleClickSearch}>
          검색
        </Button>

        <Button width="50%" name="article" onClick={handleClickView}>
          기사보기
        </Button>

        <Button width="50%" name="bookmark" onClick={handleClickView}>
          즐겨찾기
        </Button>
      </Header>
      {isArticleView ? <Articles /> : <Bookmarks />}
    </Layout>
  );
};

export default App;
