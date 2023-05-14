import styled from "@emotion/styled";
import React from "react";
import dahyun from "../../../resource/img/dahyun2.jpg"
import { MdShortcut } from 'react-icons/md'

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    align-items: center;
`

const ProfileAndDateWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 36%;
    height: 100%;
`

const ProfileImage = styled.img`
    object-fit: cover;
    width: 40px;
    height: 100%;
    margin-right: 10px;
    border-radius: 50%;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Author = styled.div`
    font-weight: 600;
    font-size: 12px;
`

const WroteDate = styled.div`
    font-weight: 300;
    font-size: 12px;
`

const StyledIcon = styled(MdShortcut)`
    color: #5d5d5d;
    font-size: 38px;
`

/**
 * TODO:
 * ProfileImage -> 프로필 이미지 소스
 * TextWrapper
 *  Author -> 이름
 *  WroteDate -> 작성 날짜
 * 
 * 총 3가지 백엔드에서 가져올 것
 */
export default function ChoreInfo() {
    return (
        <>
            <ContentWrapper>
                <ProfileAndDateWrapper>
                    <ProfileImage src={dahyun} alt="다현"></ProfileImage>
                    <TextWrapper>
                        <Author>김다현</Author>
                        <WroteDate>Jun 20, 2023</WroteDate>
                    </TextWrapper>
                </ProfileAndDateWrapper>
                <StyledIcon></StyledIcon>
            </ContentWrapper>
        </>
    )
}