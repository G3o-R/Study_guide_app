import styled from "styled-components";

export const HomePageStyles = styled.div`
display: flex;
justify-content:center;
padding-left:7.5rem;
`;

export const HeaderContainer = styled.div`
    width:95%;
`;

export const Header = styled.h1`
    text-decoration: underline;
    &::after{
        content: "";
    display: block; /* This will create a line break */
    width: 100%;
    height: auto;
    color: red; /* Adjust the color as needed */
    }

`;

export const FoldersDisplayContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    gap:15px;
    padding: 70px;
`;