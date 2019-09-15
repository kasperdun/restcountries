import styled from "styled-components";

export const PageWrapper = styled.section`
  position: relative;
  height: 100%;
  display: -webkit-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.itemProp});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  min-width: 400px;
  max-width: 1000px;

  background-color: rgba(224, 224, 224, 0.9);
  padding: 10px;
  & img {
    height: 40px;
  }
`;

export const Details = styled.section`
  color: black;
  margin-left: 10px;
`;

export const DetailsTitle = styled.span`
  color: #607d8b;
  font-weight: bold;
  margin-right: 5px;
`;

export const NoDataText = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: auto;
`;
