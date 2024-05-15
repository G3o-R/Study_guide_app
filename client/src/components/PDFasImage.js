import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const PDFContainer = styled.div`
    border: 1px solid #dfdfdf;
    cursor: pointer;
`;

export default function PDFasImage({document, handlePDFSelect, isLarge}) {
  const {pdf_file} = document
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

//   I'll handle rendering the width of the page letter
//   but my idea od doing so would be using a useEffect to get the width of the screen
//   and dividing that by some given number (I don't feel like thinking har rn)
//   and that would set the state of a variable like width so that the width of the pdf is responsive
//   to the size of the screen. I figured I'd go this route because setting the width using css seems to be messing things up so I figured I'd go easy on myself
//   also I can't use use { useResizeObserver } from '@wojtekmaj/react-hooks'; for some reason

const [width, setWidth] = useState(window.innerWidth)

function handleResize(){
  setWidth(window.innerWidth)
}

  useEffect(()=>{
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  },[])


  console.log(width)


  return (
    <PDFContainer onClick={isLarge ? null : () => handlePDFSelect(document)} className='pdf-container'>
          <Document file={pdf_file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages || 0), (el, index) => (
                <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={width >= 1000 ? 800 : (width - 200) }
                renderTextLayer={isLarge ? true : false }
                />
            ))}
          </Document>
    </PDFContainer>
  );
}
