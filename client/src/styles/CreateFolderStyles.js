import styled from "styled-components";

export const CreateFolderContainer = styled.div`
    display:none;
    z-index: 5;
    &.active{
        display:flex;
    }
`;

export const AddFolderFormContainer = styled.div`
    margin: 20px;
    padding:5px;
    border: 1px solid lightgray;
    border-radius: 8px;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const AddFolderForm = styled.form`

input{
    border:none;
    border-bottom: 1px solid black;
    width: fit-content;
    &:focus{
        outline: none;

    }
}

button{
    margin-left: 5px;
    cursor: pointer;
    border:1px solid #d7d7d7;
    border-radius: 50%;
    aspect-ratio: 1/1;
    background-color: transparent;

    &:hover{
        border-color: black;
    }
}

`;