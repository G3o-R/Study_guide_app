import { PDFDisplayContainer, CloseButtonContainer } from "../styles/PDFDisplayStyles";
import PDFasImage from '../components/PDFasImage';

export default function PDFDisplay({PDFDoc, handleClosePDFDisplay}){
    return (
        <PDFDisplayContainer>
            <CloseButtonContainer >
                <button onClick={handleClosePDFDisplay}>x</button>
            </CloseButtonContainer>
                <PDFasImage PDFDoc={PDFDoc} isLarge={true}/>
        </PDFDisplayContainer>
    )
}