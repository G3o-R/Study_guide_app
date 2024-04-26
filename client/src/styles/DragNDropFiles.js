import styled from "styled-components";

export const DragNDropForm = styled.form`

`;

export const DropZoneContainer = styled.div`
    border: 1px solid #e9e9e9;
    padding: 20px;
    text-align: center;
    background-color: #F0F0F0;
    transition: background-color 0.3s ease;
    margin-bottom: 20px;
    
    &:hover{
        background-color: #e9e9e9
    }
`;

export const SelectFileButton = styled.button`
    border: none;
    background-color: transparent;
    
    &:hover{
        text-decoration: underline;
        color: rgb(25,39,100)
    }
`;