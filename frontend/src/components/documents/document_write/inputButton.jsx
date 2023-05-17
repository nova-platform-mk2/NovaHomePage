import styled from "@emotion/styled";
import React from "react";
import { documentStore } from "../../../store/documents/documentWrite.store";

const Base = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 30px;
`
const CustomButton = styled.button`
    height: 40px;
    width: 118px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border-radius: 3px;
    border: 1px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    background-color: rgba(36, 147, 191, 0.6);
    cursor: pointer;
`

export default function InputButton() {

    const { logAll } = documentStore()

    return (
        <>
            <Base>
                <CustomButton onClick={logAll}>제&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;출</CustomButton>
            </Base>
        </>
    )
}