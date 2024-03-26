import styled from 'styled-components';

export const FolderContainer = styled.div`
  width: 200px;
  height: 250px;
  background-color: ${(props) => (props.className)};
  border: 1px solid #ccc;
  border-radius: 0px;
  position: relative;
  overflow: hidden;
  /* box-shadow: 5px 1px red; */
`;

export const FolderCover = styled.div`
  width: 100%;
  height: 50%;
  background-color: #ddd;
`;

export const FolderFlap = styled.div`
  width: 100%;
  height: 50%;
  background-color: #f9f9f9;
`;

export const FolderName = styled.div`
  margin: 20px;
  background-color: #FFFFFF;
`;