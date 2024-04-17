import styled from "styled-components";
import { 
    OptionsBtnWrapper,
    OptionsBtn,
    OptionsWrapper
 } from "./SubjectsPageStyles";

export const ContentPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 7.5rem;
    margin: 0px 20px 0px 10px;
`;

export const HeaderContainer = styled.div`
    display: flex;

`;

export const Header = styled.h1`
    margin-left: 3rem;
    font-weight: 500;
`;

export const SubjectsOptionsWrapper = styled(OptionsBtnWrapper)`

`;

export const SubjectOptionsBtn = styled(OptionsBtn)`

`;

export const AddDocumentWrapper = styled(OptionsWrapper)`
    width: 20rem;
`;

export const AddDocumentContainer = styled.div`
    width: 20em;
    aspect-ratio: 2/3;
    background-color: #dfdfdf;
    border-radius: 24px 24px 24px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormContainer = styled.div`
    background-color: #FFFFFF;
    aspect-ratio: 1/1;
    width: 80%;

`;