import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFContainer = styled.div`
  border: 1px solid #dfdfdf;
  cursor: pointer;
`;

function highlightPattern(text, pattern, index) {
  // debugger
  // return text.str.replace(pattern, (value) => `<mark>${value}</mark>`)

  if(text.itemIndex === index){
    // console.log("in here!!!")
    return text.str.replace(pattern, (value) => `<mark>${value}</mark>`)
  } else {return text}
}


export default function PDFasImage({ PDFDoc, handlePDFSelect, isLarge }) {
  const [numPages, setNumPages] = useState(null);
  const [highlightedText, setHighlightedText] = useState("");

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const customTextRenderer = useCallback(
    (textItem) => highlightPattern(textItem, highlightedText, textItem.itemIndex),
    [highlightedText]
  );

  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }


  const handleHighlight = useCallback(() => {
    const selection = window.getSelection();
    
    if (selection && selection.toString()) {
      // debugger
      const selectedText = selection.toString();
      setHighlightedText(selectedText);
      console.log(selectedText.length)
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PDFContainer
      onClick={isLarge ? null : () => handlePDFSelect(PDFDoc)}
      onMouseUp={handleHighlight}
      className="pdf-container"
    >
      <Document file={PDFDoc.pdf_file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages || 0), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={isLarge ? (width <= 1250 ? width / 1.45 : width / 3) : 400}
            renderTextLayer={isLarge ? true : false}
            customTextRenderer={customTextRenderer}
          />
        ))}
      </Document>
    </PDFContainer>
  );
}
