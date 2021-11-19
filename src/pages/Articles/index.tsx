import { useAppSelector } from "../../store/hooks";
import {
  searchingArticlesAsync,
  selectArticles,
  selectKeyword,
  selectPage,
  selectStatus,
} from "../../features/article/articleSlice";
import Article from "../../components/Article";
import FlexColumnBox from "../../components/shared/FlexColumnBox";
import styled from "styled-components";
import Button from "../../components/shared/Button";
import { useDispatch } from "react-redux";
import ErrorMessage from "../../components/shared/ErrorMessage";
import Loading from "../../components/shared/Loading";

const Wrapper = styled(FlexColumnBox)`
  align-items: center;
  gap: 10px;
`;

const Articles = () => {
  const articles = useAppSelector(selectArticles);
  const page = useAppSelector(selectPage);
  const keyword = useAppSelector(selectKeyword);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch();

  const handleClickSearchMoreArticles = async () => {
    dispatch(searchingArticlesAsync({ keyword, page: page + 1 }));
  };

  return (
    <Wrapper>
      {status === "failed" && (
        <ErrorMessage>정보를 불러오는 데 실패했습니다.</ErrorMessage>
      )}
      {Object.values(articles).map(
        (article) =>
          article.text && (
            <Article key={article.url} content={article}></Article>
          )
      )}
      {status === "loading" && <Loading />}
      {page > 0 && (
        <Button width="80%" onClick={handleClickSearchMoreArticles}>
          기사 더 보기
        </Button>
      )}
    </Wrapper>
  );
};

export default Articles;
