import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';

// styles for thhe pdf container
const PDFContainer = styled.div`
    border: 1px solid #dfdfdf;
    cursor: pointer;
`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

export default function PDFasImage({document, handlePDFSelect, isLarge}){
    const {pdf_file} = document
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    function onDocumentSuccess({numPages}){
        setNumPages(numPages)
    }

    console.log(window.innerWidth)
    


    return (
        <PDFContainer onClick={isLarge? null : ()=>handlePDFSelect(document)}>
            <Document file={pdf_file.url} onLoadSucess={onDocumentSuccess}>
                <Page
                 pageNumber={pageNumber}
                 renderTextLayer={false}
                 renderAnnotationLayer={false} 
                 width={500}></Page>
            </Document>
        </PDFContainer>
    )
}