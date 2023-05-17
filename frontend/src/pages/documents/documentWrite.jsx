import styled from "@emotion/styled";
import React from "react";
import TitleInput from "../../components/documents/document_write/titleInput";
import ContentInput from "../../components/documents/document_write/contentInput";
import InputButton from "../../components/documents/document_write/inputButton";


const Base = styled.div`
    width: 68%;
    margin: 0 auto;
    margin-top: 30px;
    position: relative;
`

export default function DocumentWrite() {

    return (
        <>
            <Base>
                <TitleInput></TitleInput>
                <ContentInput></ContentInput>
                <InputButton></InputButton>
            </Base>
        </>
    )
}