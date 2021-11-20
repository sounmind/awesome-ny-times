import React from "react";
import styled from "styled-components";

import FlexRowBox from "../../shared/FlexRowBox";

const Wrapper = styled(FlexRowBox)`
  width: 100%;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  > * {
    width: 100%;
  }
`;

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;
