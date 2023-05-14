import styled from "@emotion/styled";
import ClampLines from 'react-clamp-lines';
import React from "react";
import ChoreInfo from "./choreInfo";


const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 260px;
    margin-top: 30px;
    margin-bottom: 30px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    border-radius: 10px;
`
const DocumentImageView = styled.img`
    object-fit: cover;
    width: 45%;
    height: 92%;
    margin: 10px;
    border-radius: 10px;
`

const DocumentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${props => props.fullWidth ? '100%' : '50%'};
    height: ${props => props.fullWidth ? '80%' : '88%'};
    margin: ${props => props.fullWidth ? '20px' : '10px'};
`

const DocumentTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
`

const DocumentContent = styled.div`
    font-weight: 300;
    font-size: 18px;
    height: 60%;
`

/**
 * TODO:
 * DocumentImageView -> 글 이미지 소스
 * DocumentInfo
 *  DocumentTitle -> 글 제목
 *  DocumentContent -> 글 내용 
 * 
 * 총 3가지 백엔드에서 가져올 것
 */
export default function DocumentComponen({image}) {

    return (
        <>
            <Container>
                
                {image && <DocumentImageView src={image} alt="다현"></DocumentImageView>}
                <DocumentInfo fullWidth={!image}>
                    <DocumentTitle>This is test title</DocumentTitle>
                    <DocumentContent>
                        <ClampLines
                            text="this is test content, this is test content,this is test content,this is test content,this is test content,this is test content, this is test content,this is test content,this is test content,this is test content,this is test content, this is test content,this is test content,this is test content,this is test content,this is test content, this is test content,this is test content,this is test content,this is test content,"
                            lines={6}
                            buttons={false}
                        />
                        </DocumentContent>
                    <ChoreInfo></ChoreInfo>
                </DocumentInfo>
            </Container>
        </>
    )
}