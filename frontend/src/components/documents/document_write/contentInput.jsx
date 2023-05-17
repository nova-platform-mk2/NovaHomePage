import React from "react";
import styled from "@emotion/styled";
import MDEditor from '@uiw/react-md-editor';
import { documentStore } from "../../../store/documents/documentWrite.store";

const Editor = styled(MDEditor)`
    border-radius: 10px;
    border: 1px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    margin-bottom: 20px;
`
export default function ContentInput() {

    const {content, setContent} = documentStore(state => ({
        content: state.content,
        setContent: state.setContent
    }))

    return (
        <>
            <div data-color-mode="light">
                <Editor
                    value={content}
                    onChange={setContent}
                />
            </div>
        </>
    )
}