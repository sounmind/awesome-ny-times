import React, { MouseEvent } from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
  z-index: 0;
`;

const Container = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
`;

const Modal: React.FC<{ children: React.ReactNode; handleClose: () => void }> =
  ({ children, handleClose }) => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    };

    return (
      <>
        <Background onClick={handleClickOutside} />
        <Container>{children}</Container>
      </>
    );
  };

export default Modal;
