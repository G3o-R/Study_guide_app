import styled from 'styled-components';

export const SubjectCardContainer = styled.div`
  width: 200px;
  height: 250px;
  position: relative;
  border-radius: 8px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  background-color: ${(props) => (props.className)};
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  border-radius: 8px;
`;

export const SubjectName = styled.div`
  margin: 20px 20px 0px 0px;
  background-color: #FFE5B4;
  width: fit-content;
  height: fit-content;
  padding: 0px 10px 0px 10px;
`;

export const ShowContentContainer = styled.div`
  position: absolute;
  bottom: -1px;
  width: 200px;
  background-color: #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ddd;
  border-radius: 8px;
`;

export const ShowContentButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: 24px;
`;
