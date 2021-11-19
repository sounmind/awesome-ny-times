import React from "react";
import styled from "styled-components";
import Article from "../../components/Article";
import FlexColumnBox from "../../components/shared/FlexColumnBox";
import { selectBookmarked } from "../../features/article/articleSlice";
import { useAppSelector } from "../../store/hooks";

const Wrapper = styled(FlexColumnBox)`
  align-items: center;
  gap: 10px;
`;

const Bookmarks = () => {
  const bookmarkedArticles = useAppSelector(selectBookmarked);

  return (
    <Wrapper>
      {bookmarkedArticles.map((article) => (
        <Article key={article.url} content={article} />
      ))}
    </Wrapper>
  );
};

export default Bookmarks;
