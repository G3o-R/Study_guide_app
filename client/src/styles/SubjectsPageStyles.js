import styled, {keyframes} from "styled-components";

const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        font-size: 24px;
    }
    100% {
        transform: rotate(270deg);
        font-size: 24px;
    }
`;

const reverseSpinAnimation = keyframes`
    0% {
        transform: rotate(270deg);
        font-size: 24px;
    }
    100% {
        transform: rotate(0deg);
        font-size: 24px;
    }
`;

const rainbowEffect = keyframes`
    0% {
        color: red;
    }
    16% {
        color: orange;
    }
    33% {
        color: yellow;
    }
    50% {
        color: green;
    }
    67% {
        color: blue;
    }
    83% {
        color: indigo;
    }
    100% {
        color: violet;
    }
`;

export const SubjectsPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 7.5rem;
    margin: 0px 20px 0px 10px;
`;

export const HeaderContainer = styled.div`
    display: flex;
`;

export const FoldersHeader = styled.h1`
    margin-left: 3rem;
    font-weight: 500;
`;

export const TableWrapper = styled.div`
    display: contents;
    align-items: left;
    width: 100%;
    margin: 100px;
    
    table {
        width: 100%;
        border-collapse: collapse;

        thead {
            display: table-header-group;
            vertical-align: middle;
            unicode-bidi: isolate;
            border-color: inherit;

            tr {
                display: table-row;
                vertical-align: inherit;
                unicode-bidi: isolate;
                border-color: inherit;

                th {
                    border-bottom: 2px solid black;
                    padding: 8px;
                }
            }
        }

        tbody {
            display: table-row-group;
            vertical-align: middle;
            unicode-bidi: isolate;
            border-color: inherit;

            .subject-name{
                cursor:pointer;
                &:hover{
                    text-decoration: underline;
                }
            }

            tr {
                border-bottom: 1px solid lightgray;
                transition: background-color 0.3s ease;
                height: 20px;

                &:hover {
                    background-color: #F5F5F5;
                }

                td {
                    padding: 16px;
                }
            }
        }
    }
`;

export const OptionsBtnWrapper = styled.div`
position: absolute;
z-index: 1000;
bottom: 0;
right: 0;
margin: 70px;

`;

export const OptionsBtn = styled.button`
    border: 1px solid #dfdfdf;
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 40px;
    cursor: pointer;
    font-size: 24px;
    transition: transform 0.3s ease, font-size 0.3s ease, width 0.3s ease;
    
    &:hover {
        animation: ${spinAnimation} 0.3s forwards, ${rainbowEffect} 6s infinite;
    }
    &:not(:hover) {
        animation: ${reverseSpinAnimation} 0.3s forwards;
    }
`;

export const OptionsWrapper = styled.div`
    position:absolute;
    bottom: 0;
    right: 0;
    margin: 80px;

    &.inactive{
    display:none
    }

`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 30px;

    option{
        cursor: pointer;
        font-size: 20px;
        &.delete{
            border: 1px solid lightgrey;
            border-radius: 8px 8px 0px 0px
        }
        &.add{
            border: 1px solid lightgrey;
            border-radius: 0px 0px 0px 8px
        }
        
    }
`;