import React from 'react'
import styled from '@emotion/styled'
import DocumentListTitle from '../../components/documents/documents_list/title'
import DocumentComponen from '../../components/documents/documents_list/documentComponent'
import { documentStore } from "../../store/documents/documentList.store";
import PagePicker from '../../components/documents/documents_list/pagePicker';

import blueStar from '../../resource/img/background/blueStar.svg'
import skyblueStar from '../../resource/img/background/skyblueStar.svg'
import skyblueStar_small from '../../resource/img/background/skyblueStar-small.svg'
import blueShootingStar from '../../resource/img/background/blueShooting.svg'
import skyblueShootingStar from '../../resource/img/background/skyblueShooting.svg'

const BackgroundWrapper = styled.div`
    position: relative;
    width: 83%;
    margin: 0 auto;
`
const StyledImage = styled.div`
    position: absolute;
    background-repeat: repeat-y;
    background-size: contain;
    z-index: 1;
`

const BlueStar = styled(StyledImage)`
    background-image: url(${blueStar});
    top:  ${props => `${props.startPosition+210}px` };
    left: 30px;
    width: 101px;
    height: 101px;
    background-repeat: repeat-y;
`

const SkyblueStar = styled(StyledImage)`
    background-image: url(${skyblueStar});
    top:  ${props => `${props.startPosition+86}px` };
    left: 160px;
    width: 61px;
    height: 61px;
`

const SkyblueStarSmall = styled(StyledImage)`
    background-image: url(${skyblueStar_small});
    top:  ${props => `${props.startPosition+500}px` };
    left:1050px;
    width: 48px;
    height: 48px;
`

const SkyblueShootingStar = styled(StyledImage)`
    background-image: url(${skyblueShootingStar});
    top:  ${props => `${props.startPosition+90}px` };
    left: 40px;
    width: 380px;
    height: 381px;
`

const BlueShootingStar = styled(StyledImage)`
    background-image: url(${blueShootingStar});
    top:  ${props => `${props.startPosition+100}px` };
    left:  907px;
    width: 229px;
    height: 230px;
`

const Base = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: left;
    position: relative;
    z-index: 2;
`

export default function DocumentList() {

    const documents = documentStore(state => state.documents)
    const backgroundIteratingSize = 650
    const backgroundIterator = 4

    return (
        <>
            <BackgroundWrapper>
                {Array.from({ length: backgroundIterator }, (_, i) => i).map((position) => (
                    <BlueStar key={position} startPosition={position*backgroundIteratingSize}></BlueStar> 
                ))}
                {Array.from({ length: backgroundIterator }, (_, i) => i).map((position) => (
                    <SkyblueStar key={position} startPosition={position*backgroundIteratingSize}></SkyblueStar>
                ))}
                {Array.from({ length: backgroundIterator }, (_, i) => i).map((position) => (
                    <SkyblueStarSmall key={position} startPosition={position*backgroundIteratingSize} ></SkyblueStarSmall>
                ))}
                {Array.from({ length: backgroundIterator }, (_, i) => i).map((position) => (
                    <BlueShootingStar key={position} startPosition={position*backgroundIteratingSize}></BlueShootingStar>
                ))}
                {Array.from({ length: backgroundIterator }, (_, i) => i).map((position) => (
                    <SkyblueShootingStar key={position} startPosition={position*backgroundIteratingSize}></SkyblueShootingStar>
                ))}
            </BackgroundWrapper>
                <Base>
                    <DocumentListTitle></DocumentListTitle>
                    {documents.map((document, index) => (
                        <DocumentComponen key={index} image={document.image} />
                    ))}
                    <PagePicker></PagePicker>
                </Base>
        </>
    )
}

