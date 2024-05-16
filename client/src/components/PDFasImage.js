import React, { useState, useRef, useEffect, useCallback } from 'react';
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

function highlightPattern(text, pattern) {
  return text.replace(new RegExp(pattern, 'gi'), (match) => `<mark>${match}</mark>`);
}

export default function PDFasImage({ document, handlePDFSelect, isLarge }) {
  const { pdf_file } = document;
  const [numPages, setNumPages] = useState(null);
  // const [searchText, setSearchText] = useState('');
  const [highLightedText, setHighLightedText] = useState("")

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const customTextRenderer = useCallback((textItem) => {
    if (highLightedText.trim() !== '') {
      return highlightPattern(textItem.str, highLightedText);
    }
    return textItem.str;
  }, [highLightedText]);

  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  console.log(width)


  const handleHighlight = useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      const selectedText = selection.toString();
      setHighLightedText(selectedText);
    }
  }, []);


  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PDFContainer onClick={isLarge ? null : () => handlePDFSelect(document)} className="pdf-container">
      <Document file={pdf_file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
        {Array.from(new Array(numPages || 0), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            high
            width={isLarge ? (width <= 1250 ? width / 1.45 : width / 3) : 400}
            renderTextLayer={isLarge ? true : false}
            customTextRenderer={customTextRenderer}
            onMouseUp={handleHighlight}
          />
        ))}
      </Document>
    </PDFContainer>
  );
}
