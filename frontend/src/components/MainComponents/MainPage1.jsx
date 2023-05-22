import React from 'react'
import styled from '@emotion/styled'

import logo from '../../resource/img/mainpage/novalogo.png'



const Background = styled.div`
  position: relative;
  justify-content: center;
  width: 1280px;
  height: 1280px;
  margin: 0 auto;
`

const LogoText = styled.div`
  position: relative;
  width: 600px;
  height: 35px;
  left: 600px;
  top: 65px;
  font-size: 64px;
`

const Typing = styled.div`
  white-space: pre-wrap;
  font-size: 64px;
  color: #2493bf;
  width: 700px;
  height: 50px;
  position: relative;
  left: 600px;
  top: 900px;
`
const Logo = styled.img`
  position: relative;
  width: 350px;
  height: 350px;
  left: 400px;
  top: 150px;
`

export default function Main() {
  return (
    <Background>
      <LogoText>NOVA software club</LogoText>
      <Typing>IMAGE PROCESSING Algorithm, Application DevOps, Cloud</Typing>
      <Logo src = {logo}/>
    </Background>
  )
}