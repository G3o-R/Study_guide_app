import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

export default function PDFasImage({document}){
    const {pdf_file} = document
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    function onDocumentSuccess({numPages}){
        setNumPages(numPages)
    }

    console.log(pdf_file.url)

    return (
        <div>
            <Document file={pdf_file.url} onLoadSucess={onDocumentSuccess}>
                <Page
                 pageNumber={pageNumber} 
                 renderTextLayer={false}
                 renderAnnotationLayer={false} 
                 width={300}></Page>
            </Document>
        </div>
    )
}