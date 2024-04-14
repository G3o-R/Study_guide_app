import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  ContentPageStyles,
  Header,
  HeaderContainer
 } from '../styles/SubjectContentPageStyles';
import { useSelector } from "react-redux"

export default function SubjectContentPage() {
  const { serialNumber } = useParams();
  const { user } = useSelector((state) => state.user)

  let folderToDisplay = user.folders.find((folder) => folder.serial_number === serialNumber)


  return (
    <ContentPageStyles>
      <HeaderContainer>
        <Header> {folderToDisplay.subject_name} </Header>
      </HeaderContainer>
    </ContentPageStyles>
  );
}