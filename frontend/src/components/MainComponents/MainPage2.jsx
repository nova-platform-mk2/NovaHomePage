import React from 'react'
import styled from '@emotion/styled'

import DummyIcon from '../../resource/img/mainpage/dummy_icon.png'

const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1280px;
  height: 700px;
  display: flex;
  font-family: 'Roboto';
  font-style: normal;
`

const Icons_Wrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-block: 100px;
  width: 500px;
  height: 500px;
`
const Icon_Wrap = styled.div`
    text-align: center;
    align-items: center;
    width: 250px;
    height: 250px;
    padding-block: 10px;
    font-weight: 600;
    font-size: 24px;
`

const Icon = styled.img`
    display: block;
    width: 175px;
    height: 175px;
    margin: auto;
`
 
const DivideLine = styled.hr`
  position: relative;
  border: 6px solid #252525;
  height: 430px;
  top: 100px;
`
const HeadLine = styled.h1`
  position: relative;
  width : 200px;
  font-weight: 600;
  font-size: 64px;
  line-height: 60px;

  display: flex;
  align-items: center;
  color: #252525;
`

const TextContent = styled.span`
  position: relative;
  width: 500px;
  height: 300px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #252525;
  white-space: pre-wrap;
`

const TextWrap = styled.div`
  position: relative;
  width:500px;
  height: 700px;
  padding-block: 100px;
  left: 100px;
`


export default function Main() {
  return (
    <Wrap>
      <TextWrap>
        <HeadLine>What we do</HeadLine>
        <TextContent>Lorem ipsum dolor sit amet<br/>consectetur test test test.<br/>Adipiscing mauris convallis inac in<br/>nullam test test test.<br/>Ullamcorper aliquet nec adipiscing ac<br/>lorem this is design not code</TextContent>
      </TextWrap>
      <DivideLine/>
      <Icons_Wrap>
        <Icon_Wrap>
          <Icon src = {DummyIcon} ></Icon>
          <span>Algorithm</span>
        </Icon_Wrap>
        <Icon_Wrap>
          <Icon src = {DummyIcon} ></Icon>
          <span>Application</span>
        </Icon_Wrap>
        <Icon_Wrap>
          <Icon src = {DummyIcon} ></Icon>
          <span>DebOps</span>
        </Icon_Wrap>
        <Icon_Wrap>
          <Icon src = {DummyIcon} ></Icon>
          <span>Cloud</span>
        </Icon_Wrap>
      </Icons_Wrap>
    </Wrap>
  )
}