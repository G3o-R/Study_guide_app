import styled from "styled-components";

export const SubjectsPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 7.5rem;
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

                &:hover {
                    background-color: #F5F5F5;
                }

                td {
                    padding: 8px;
                }
            }
        }
    }
`;
