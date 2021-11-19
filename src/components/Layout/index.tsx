import React from "react";
import styled from "styled-components";
import FlexColumnBox from "../shared/FlexColumnBox";

const Wrapper = styled(FlexColumnBox.withComponent("main"))`
  display: flex;
  min-width: 500px;
  width: 90%;
  height: 100%;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
