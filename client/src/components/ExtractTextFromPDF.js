// Import specific modules or functions from pdfjs-dist/webpack
import { getDocument } from 'pdfjs-dist/webpack';

async function ExtractTextFromPDF(pdfUrl) {
  try {
    const loadingTask = getDocument(pdfUrl);
    const pdf = await loadingTask.promise;

    const textContent = {};

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);

      const pageTextContent = await page.getTextContent();
      const items = pageTextContent.items.map(item => ({
        str: item.str,
        fontSize: item.fontSize,
        fontName: item.fontName
      }));

      textContent[pageNum] = { items };
    }

    return textContent;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    return null;
  }
}

export default ExtractTextFromPDF;
