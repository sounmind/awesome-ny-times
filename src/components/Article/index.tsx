import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleBookmark } from "../../features/article/articleSlice";
import { IArticle } from "../../types";
import Modal from "../Modal";
import Button from "../shared/Button";
import FlexRowBox from "../shared/FlexRowBox";

const Wrapper = styled(FlexRowBox)`
  width: 100%;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 10px;
`;

const Thumnail = styled.img`
  width: 150px;
  height: 150px;
`;

const TextContent = styled.div`
  width: 80%;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Headline = styled.h3`
  font-size: 30px;
`;

const Text = styled.p`
  font-size: 20px;
`;

const BookmarkIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const BookmarkQuestionBox = styled(FlexRowBox)`
  align-items: center;
  width: fit-content;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
`;

const Article: React.FC<{ content: IArticle }> = ({
  content: { url, text, image, bookmarked, headline },
}) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const handleClickBookmarkButton = () => {
    if (bookmarked) {
      setIsModal(true);
    } else {
      dispatch(toggleBookmark({ url }));
    }
  };

  const handleClickDeleteArticleFromBookmarks = () => {
    dispatch(toggleBookmark({ url }));
    setIsModal(false);
  };

  return (
    <Wrapper>
      {isModal && (
        <Modal handleClose={() => setIsModal(false)}>
          <BookmarkQuestionBox>
            <div>이 기사를 북마크에서 삭제하시겠습니까?</div>
            <Button
              width="fit-content"
              onClick={handleClickDeleteArticleFromBookmarks}>
              예
            </Button>
          </BookmarkQuestionBox>
        </Modal>
      )}

      <a href={url} target="_blank" rel="noreferrer">
        <Thumnail
          alt="article thumnail"
          src={
            image
              ? `https://static01.nyt.com/${image}`
              : "./images/defaultThumnail.png"
          }
        />
      </a>
      <TextContent>
        <Headline>{headline}</Headline>
        <Text>
          {text.replaceAll(" ", "").length > 30
            ? text.slice(0, 30) + "... more"
            : text}
        </Text>
      </TextContent>

      <Button
        style={{ border: 0 }}
        width="fit-content"
        onClick={handleClickBookmarkButton}>
        {bookmarked ? (
          <BookmarkIcon src={"/images/bookmark-black.png"} />
        ) : (
          <BookmarkIcon src={"/images/bookmark-white.png"} />
        )}
      </Button>
    </Wrapper>
  );
};

export default Article;
