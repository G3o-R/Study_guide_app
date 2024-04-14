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

  let subjectToDisplay = user.subjects.find((subject) => subject.serial_number === serialNumber)


  return (
    <ContentPageStyles>
      <HeaderContainer>
        <Header> {subjectToDisplay.subject_name} </Header>
      </HeaderContainer>
    </ContentPageStyles>
  );
}