import { PDFDisplayContainer, CloseButtonContainer } from "../styles/PDFDisplayStyles";
import PDFasImage from '../components/PDFasImage';

export default function PDFDisplay({document, handleClosePDFDisplay}){
    return (
        <PDFDisplayContainer>
            <CloseButtonContainer >
                <button onClick={handleClosePDFDisplay}>x</button>
            </CloseButtonContainer>
                <PDFasImage document={document} isLarge={true}/>
        </PDFDisplayContainer>
    )
}