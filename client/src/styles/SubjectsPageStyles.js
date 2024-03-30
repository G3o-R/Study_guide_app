import styled from "styled-components";

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
    /* margin: 10px 10px 10px 10px; */
    
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

export const MoreBtnWrapper = styled.div`
position: absolute;
bottom: 0;
right: 0;
padding: 70px;

`;

export const MoreBtn = styled.button`
    border: 1px solid #dfdfdf;
    border-radius: 50%;
    aspect-ratio: 1/1;
    width:32px;
    cursor: pointer;
    font-size:24px;
`;