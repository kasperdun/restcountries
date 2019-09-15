import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 5px;
  width: 400px;
`;
export const Suggestions = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);
  position: absolute;
  z-index: 1;
  background-color: white;
`;

export const Suggestion = styled.li`
  padding: 5px;
  font-size: 15px;
  line-height: 15px;
  color: black;

  &:hover {
    background-color: #9cdfff;
    cursor: pointer;
  }
`;
