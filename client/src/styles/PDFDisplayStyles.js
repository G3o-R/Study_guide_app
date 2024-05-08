import styled from "styled-components";

export const PDFDisplayContainer = styled.div`
    display: flex;
    top:0;
    width:100%;
    height:100%;
    position: absolute;
    z-index: 9;
    justify-content: center;
    align-items: center;
    background-color: rgb(55,55,55,0.5);
`;


export const CloseButtonContainer = styled.div`
    position: absolute;
    display:flex;
    top: 0;
    right: 0;
    padding: 30px;
    button{
        cursor: pointer;
        font-size:40px;
        border:none;
        background-color:transparent;
    }
`;