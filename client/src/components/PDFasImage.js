import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import ExtractTextFromPDF from './ExtractTextFromPDF';

const PDFContainer = styled.div`
    border: 1px solid #dfdfdf;
    cursor: pointer;
    width: 20rem;
    .react-pdf__Document{
        .react-pdf__Page{
            canvas{
                aspect-ratio: auto 612 / 792 !important;
                width: 100% !important;
                height: auto !important;
                direction: ltr;
            }
        }
    }

`;

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFasImage({document, handlePDFSelect, isLarge}){
    const {pdf_file} = document
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [textContent, setTextContent] = useState(null);

    useEffect(() => {
        async function getTextContent() {
            const extractedText = await ExtractTextFromPDF(pdf_file.url);
            setTextContent(extractedText);
        }

        getTextContent();
    }, [pdf_file.url]);

    function onDocumentSuccess({numPages}){
        setNumPages(numPages)
    }

    function renderCustomTextLayer(layerProps) {
        if (!textContent || !layerProps.pageNumber || !textContent[layerProps.pageNumber]) {
            return null;
        }
    
        const textItems = textContent[layerProps.pageNumber].items;
        return (
            <div className="custom-text-layer" style={{ position: 'absolute', top: 0, left: 0 }}>
                {textItems.map((item, index) => {
                    // Determine the text alignment (default to left if not specified)
                    const textAlign = item.textAlign || 'left';
    
                    // Preserve link color without functionality
                    const textColor = item.color;
                    const isLink = item.str.includes('http'); // Check if the text is a link
    
                    return (
                        <span
                            key={index}
                            style={{
                                fontSize: item.fontSize,
                                fontFamily: item.fontName,
                                fontWeight: item.fontWeight === 'bold' ? 'bold' : 'normal',
                                fontStyle: item.fontStyle === 'italic' ? 'italic' : 'normal',
                                textDecoration: item.decorationStyle === 'underline' ? 'underline' : 'none',
                                color: isLink ? 'blue' : textColor, // Preserve link color
                                position: 'absolute',
                                top: item.transform[5], // Adjust position based on text item's y-coordinate
                                left: item.transform[4], // Adjust position based on text item's x-coordinate
                                textAlign: textAlign, // Apply text alignment
                            }}
                        >
                            {item.str}
                        </span>
                    );
                })}
            </div>
        );
    }
    

    return (
        <PDFContainer onClick={isLarge ? null : () => handlePDFSelect(document)} className='pdf-container'>
            <Document file={pdf_file.url} onLoadSuccess={onDocumentSuccess}>
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer={isLarge ? renderCustomTextLayer : false} // Pass renderCustomTextLayer as renderTextLayer prop
                    renderAnnotationLayer={false}
                    // width={300}
                />
            </Document>
        </PDFContainer>
    )
}
