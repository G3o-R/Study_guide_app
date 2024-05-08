import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  AddDocumentContainer,
  AddDocumentWrapper,
  ContentContainer,
  ContentPageStyles,
  Header,
  HeaderContainer,
  SubjectOptionsBtn,
  SubjectsOptionsWrapper
 } from '../styles/SubjectContentPageStyles';
import { useSelector } from "react-redux"


import DragNDropFiles from '../components/DragNDropFiles';
import PDFasImage from '../components/PDFasImage';
import PDFDisplay from '../components/PDFDisplay';

export default function SubjectContentPage() {
  const { serialNumber } = useParams();
  const [ showOptions, setShowOptions ] = useState(false)
  const { user } = useSelector((state) => state.user)
  
  const [selectedPDF, setSelectedPDF] = useState(null)
  function handlePDFSelect(document){
    setSelectedPDF(document)
  }

  function handleClosePDFDisplay(){
    setSelectedPDF(null)
  }

  let subject = user.subjects.find((subject) => subject.serial_number === serialNumber)

  const documentsToDisplay = subject.documents.map((document) => (
    <PDFasImage key={document.id} document={document} handlePDFSelect={handlePDFSelect}/>
  ))

  return (
    <>
    <ContentPageStyles>
      <HeaderContainer>
        <Header> {subject.subject_name} </Header>
      </HeaderContainer>
      <ContentContainer>
        {documentsToDisplay}
      </ContentContainer>

      <SubjectsOptionsWrapper>
        <SubjectOptionsBtn onClick={()=>setShowOptions(!showOptions)}> + </SubjectOptionsBtn>
      </SubjectsOptionsWrapper>
      <AddDocumentWrapper className={showOptions? "active" : "inactive"}>
        <AddDocumentContainer>
          <DragNDropFiles serialNumber={serialNumber}/>
        </AddDocumentContainer>
      </AddDocumentWrapper>
    </ContentPageStyles>
    {selectedPDF ? <PDFDisplay document={selectedPDF} handleClosePDFDisplay={handleClosePDFDisplay} /> : null}
    </>
  );
}