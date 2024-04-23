import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  AddDocumentContainer,
  AddDocumentWrapper,
  ContentPageStyles,
  Header,
  HeaderContainer,
  SubjectOptionsBtn,
  SubjectsOptionsWrapper
 } from '../styles/SubjectContentPageStyles';
import { useSelector } from "react-redux"

import DragNDropFiles from '../components/DragNDropFiles';

export default function SubjectContentPage() {
  const { serialNumber } = useParams();
  const [ showOptions, setShowOptions ] = useState(false)
  const { user } = useSelector((state) => state.user)

  let subjectToDisplay = user.subjects.find((subject) => subject.serial_number === serialNumber)


  return (
    <ContentPageStyles>
      <HeaderContainer>
        <Header> {subjectToDisplay.subject_name} </Header>
      </HeaderContainer>

      <SubjectsOptionsWrapper>
        <SubjectOptionsBtn onClick={()=>setShowOptions(!showOptions)}> + </SubjectOptionsBtn>
      </SubjectsOptionsWrapper>
      <AddDocumentWrapper className={showOptions? "active" : "inactive"}>
        <AddDocumentContainer>
          <DragNDropFiles serialNumber={serialNumber}/>
        </AddDocumentContainer>
      </AddDocumentWrapper>

    </ContentPageStyles>
  );
}