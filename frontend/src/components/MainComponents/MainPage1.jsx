import React from 'react'
import styled from '@emotion/styled'
import { useState, useEffect } from "react";

import logo from '../../resource/img/mainpage/novalogo.png'
import vector1 from '../../resource/img/mainpage/Vector_1.png'
import vector2 from '../../resource/img/mainpage/Vector_2.png'
import vector3 from '../../resource/img/mainpage/Vector_3.png'
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
  width: 800px;
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

const Vector1 = styled.img`
  position: relative;
  width: 166px;
  height: 196px;
  left: -300px;
  top: -280px;
`

const Vector2 = styled.img`
  position: relative;
  width: 300px;
  height: 400px;
  left: -350px;
  top: 250px;
`

const Vector3 = styled.img`
  position: relative;
  width: 271px;
  height: 210px;
  left: -800px;
  top: 700px;
`

const Portal1 = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  left: 60px;
  top: -150px;
`

const Portal2 = styled.img`
  position: relative;
  width: 60px;
  height: 60px;
  left: -425px;
  top: -275px;
`
const Line1 = styled.hr`
  position: relative;
  width: 410px;
  left: 150px;
  top: -650px;
  border: 3px solid #252525;
  transform: rotate(135deg);
`
const Line2 = styled.hr`
  position: relative;
  width: 744px;
  left: 425px;
  top: -350px;
  border: 3px solid #252525;
  transform: rotate(135deg);
`

const Line3 = styled.hr`
  position: relative;
  width: 400px;
  left: 550px;
  top: -300px;
  border: 3px solid #252525;
  transform: rotate(135deg);
`
const Image1 = styled.img`
  position: relative;
  left: 130px;
  top: -480px;
  width: 325px;
  height: 402px;
  z-index: 3;
`
const Image2 = styled.img`
  position: relative;
  left: -25px;
  top: -150px;
  width: 294px;
  height: 437px;
  z-index: 2;
`

const Image3 = styled.img`
  position: relative;
  left: -500px; 
  top: 150px;
  width: 325px;
  height: 409px;
  z-index: 1;
`

const Point1 = styled.div`
    position: relative;
    left: 638px;
    top: -550px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
    z-index: 0;
`

const Point2 = styled.div`
    position: relative;
    left: 792px;
    top: -130px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
`

const Point3 = styled.div`
    position: relative;
    left: 1035px;
    top: -200px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
`
const words = ["IMAGE PROCESSING\nAlgorithm, Application\nDevOps, Cloud",""];

export default function Main() {
  const [index] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse 
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 2000 :150, parseInt(Math.random() * 350)));
    // 위는 시간설정
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);


  return (
    <Background>
      <LogoText>NOVA software club</LogoText>
      <Typing>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</Typing>
      <Logo src = {logo}/>
      <Vector1 src = {vector1} />
      <Vector2 src = {vector2} />
      <Vector3 src = {vector3} />
      <Portal1 src = {portal}/>
      <Portal2 src = {portal}/>
      <Image1 src = {image1}/>
      <Image2 src = {image2}/>
      <Image3 src = {image3}/>
      <Line1/>
      <Line2/>
      <Line3/>
      <Point1/>
      <Point2/>
      <Point3/>
    </Background>
  )
}