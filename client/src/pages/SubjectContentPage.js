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
import { Document, Page } from 'react-pdf';


import DragNDropFiles from '../components/DragNDropFiles';

export default function SubjectContentPage() {
  const { serialNumber } = useParams();
  const [ showOptions, setShowOptions ] = useState(false)
  const { user } = useSelector((state) => state.user)

  let subjectToDisplay = user.subjects.find((subject) => subject.serial_number === serialNumber)
  
  // const documentsToDisplay = subjectToDisplay.documents.map((document) => (
  //   <div key={document.id}>
  //     <h3>{document.name}</h3>
  //     <Document
  //       file={document.description}
  //       options={{ workerSrc: "/pdf.worker.js" }}
  //     >
  //       <Page pageNumber={1} />
  //     </Document>
  //   </div>
  // ));


  return (
    <ContentPageStyles>
      <HeaderContainer>
        <Header> {subjectToDisplay.subject_name} </Header>
      </HeaderContainer>
      {/* {documentsToDisplay} */}

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