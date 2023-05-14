import styled from "@emotion/styled";
import React from "react";
import { pageListStore } from "../../../store/documents/documentList.store";

const PageButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 40px;
`

const PageButton = styled.button`
    background: none;
    border: none;
    font-weight: ${props => props.currentPage ? '900' : '300'};
    cursor: pointer;
`;

export default function PagePicker() {

    const { currentPage, setCurrentPage } = pageListStore();

    return (
        <>
            <PageButtonWrapper>
                {Array.from({ length: 9 }, (_, i) => i + 1).map((pageNumber) => (
                    <PageButton
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        currentPage={currentPage === pageNumber}
                    >
                    {pageNumber}
                    </PageButton>
                ))}
            </PageButtonWrapper>
        </>
    );
}