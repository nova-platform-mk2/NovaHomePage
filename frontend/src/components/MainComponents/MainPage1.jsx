import React from 'react'
import styled from '@emotion/styled'

import logo from '../../resource/img/mainpage/novalogo.png'
import vector_1 from '../../resource/img/mainpage/Vector_1.png'
import vector_2 from '../../resource/img/mainpage/Vector_2.png'
import vector_3 from '../../resource/img/mainpage/Vector_3.png'
import portal from '../../resource/img/mainpage/Portal.png'
import image1 from '../../resource/img/mainpage/imgtest1.png'
import image2 from '../../resource/img/mainpage/imgtest2.png'
import image3 from '../../resource/img/mainpage/imgtest3.png'


const Background = styled.div`
  position: relative;
  justify-content: center;
  width: 1280px;
  height: 1280px;
  margin: 0 auto;
`

const LogoText = styled.div`
  position: relative;
  width: 650px;
  height: 34px;
  left: 600px;
  top: 65px;
  font-size: 64px;
  font-weight: bold;
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
  font-weight : bold;
`
const Logo = styled.img`
  position: relative;
  width: 350px;
  height: 350px;
  left: 750px;
  top: 150px;
`

const Vector_1 = styled.img`
  position: relative;
  width: 166px;
  height: 196px;
  left: -300px;
  top: -280px;
`

const Vector_2 = styled.img`
  position: relative;
  width: 300px;
  height: 400px;
  left: -350px;
  top: 250px;
`

const Vector_3 = styled.img`
  position: relative;
  width: 271px;
  height: 210px;
  left: -800px;
  top: 700px;
`

const Portal_1 = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  left: 60px;
  top: -150px;
`

const Portal_2 = styled.img`
  position: relative;
  width: 60px;
  height: 60px;
  left: -425px;
  top: -275px;
`
const Line_1 = styled.hr`
  position: relative;
  width: 410px;
  left: 150px;
  top: -650px;
  border: 3px solid #252525;
  transform: rotate(135deg);
`
const Line_2 = styled.hr`
  position: relative;
  width: 744px;
  left: 425px;
  top: -350px;
  border: 3px solid #252525;
  transform: rotate(135deg);
`

const Line_3 = styled.hr`
  position: relative;
  width: 400px;
  left: 550px;
  top: -300px;
  border: 3px solid #252525;
  transform: rotate(135deg);
`
const Image_1 = styled.img`
  position: relative;
  left: 130px;
  top: -480px;
  width: 325px;
  height: 402px;
  z-index: 3;
`
const Image_2 = styled.img`
  position: relative;
  left: -25px;
  top: -150px;
  width: 294px;
  height: 437px;
  z-index: 2;
`

const Image_3 = styled.img`
  position: relative;
  left: -500px; 
  top: 150px;
  width: 325px;
  height: 409px;
  z-index: 1;
`

const Point_1 = styled.div`
    position: relative;
    left: 638px;
    top: -550px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
    z-index: 0;
`

const Point_2 = styled.div`
    position: relative;
    left: 792px;
    top: -130px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
`

const Point_3 = styled.div`
    position: relative;
    left: 1035px;
    top: -200px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
`


export default function Main() {
  return (
    <Background>
      <LogoText>NOVA software club</LogoText>
      <Typing>IMAGE PROCESSING Algorithm, Application DevOps, Cloud</Typing>
      <Logo src = {logo}/>
      <Vector_1 src = {vector_1} />
      <Vector_2 src = {vector_2} />
      <Vector_3 src = {vector_3} />
      <Portal_1 src = {portal}/>
      <Portal_2 src = {portal}/>
      <Image_1 src = {image1}/>
      <Image_2 src = {image2}/>
      <Image_3 src = {image3}/>
      <Line_1/>
      <Line_2/>
      <Line_3/>
      <Point_1/>
      <Point_2/>
      <Point_3/>
    </Background>
  )
}