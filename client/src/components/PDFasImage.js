import React, { useCallback, useState, useRef, useEffect } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
import styled from 'styled-components';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

const PDFContainer = styled.div`
    border: 1px solid #dfdfdf;
    cursor: pointer;
`;

export default function PDFasImage({document, handlePDFSelect, isLarge}) {
  const {pdf_file} = document
  const [numPages, setNumPages] = useState(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(onResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, onResize]);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <PDFContainer onClick={isLarge ? null : () => handlePDFSelect(document)} className='pdf-container'>
          <Document file={pdf_file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages || 0), (el, index) => (
                <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={800}
                />
            ))}
          </Document>
    </PDFContainer>
  );
}
