import React from "react"
import { useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { titleStore } from "../../../store/documents/documentList.store"
import WebFont from 'webfontloader'

const TitleText = styled.div`
    color: #2493BF;
    width: 60%;
    font-size: 60px;
    margin-top: 30px;
    text-align: left;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

    text-decoration: none;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 24%;
        height: 3px;
        
        background-color: #2493BF;
        box-shadow: 0px 0px 0px 1px black;
        border-radius: 10px;
    }
`;

export default function DocumentListTitle() {

    const { title } = titleStore()

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Noto Sans:700', 'sans-serif']
            }
        });
    }, []);

    return (
        <>
            <TitleText styles={css`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
                    body {
                        font-family: 'Noto Sans', sans-serif;
                    }
            `}>{title}</TitleText>
        </>
    )
}