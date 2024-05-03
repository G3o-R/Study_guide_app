import styled from 'styled-components';

export const SubjectCardContainer = styled.div`
  width: 200px;
  height: 250px;
  background-color: ${(props) => (props.className)};
  position: relative;
  border-bottom-left-radius: 100px 25px;
  border-bottom-right-radius: 100px 25px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding-left: 1px;
`;

export const SubjectName = styled.div`
  margin: 20px 20px 0px 0px;
  background-color: #FFE5B4;
  width: fit-content;
  padding: 0px 10px 0px 10px;
`;

export const ShowContentContainer = styled.div`
  position: absolute;
  bottom:-1px;
  width: 200px;
  background-color: #ccc;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 100px 25px;
  border-bottom-right-radius: 100px 25px;
  
`;

export const ShowContentButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: black;
  /* color: ${(props) => (props.className)}; */
  font-size: 20px;
    display:inline-block;
    -webkit-transform:scale(9,1);
    -moz-transform:scale(9,1);
    -ms-transform:scale(9,1); 
    -o-transform:scale(9,1); 
    transform:scale(9,1); 
`;
