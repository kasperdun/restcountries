import styled from "styled-components";

export const StyledPageHeader = styled.section`
  position: fixed;
  width: 100%;
  background: #1c2025;
  z-index: 1;
  height: 60px;
  left: 0px;
  top: 0px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const Lang = styled.span`
  cursor: pointer;
  margin: 0 3px;
  &:hover {
    color: #ccc;
  }
`;
