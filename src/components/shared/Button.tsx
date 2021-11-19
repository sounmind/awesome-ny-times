import styled from "styled-components";
import { hover } from "./mixins/hover";

export default styled.button<{ width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width = "100%" }) => width};
  background-color: transparent;
  padding: 5px 7px;
  ${hover}
`;
