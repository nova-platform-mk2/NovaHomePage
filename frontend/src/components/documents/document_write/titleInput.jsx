import styled from "@emotion/styled";
import React from "react";
import { documentStore } from "../../../store/documents/documentWrite.store";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    background: rgb(255, 255, 255);
    border: 1px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    border-radius: 10px;
`

const TextInput = styled.input`
    margin-left: 30px;
    margin-right: 30px;
    border: none;
    width: 100%;
    height: max-content;
    font-size: 40px;
    font-weight: 600;

    &::placeholder {
        color: rgba(51, 51, 51, 0.6);
    }

    &:focus {
        outline: none;
    }
`

export default function TitleInput() {

    const { title, setTitle } = documentStore(state => ({
        title: state.title,
        setTitle: state.setTitle,
    }));

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <>
            <Container>
                <TextInput placeholder="제목을 입력하세요." onChange={handleChange} value={title}></TextInput>
            </Container>
        </>
    )
}