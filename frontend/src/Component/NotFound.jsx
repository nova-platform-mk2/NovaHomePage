import React from 'react'
import styled from '@emotion/styled'
import { useNavigate } from "react-router-dom";
import { ReactComponent as NovaMark } from "../img/novamark.svg"
import { ReactComponent as Vector } from "../img/Vector.svg"
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="current"
  height="current"
  viewBox="0 0 24 24"
>
  <path fill="current" fill-rule="evenodd" d="...." />
</svg>

const BackGround = styled.div`
background-color : #F2EDD0;
width : 1440px;
height : 1024px;
display : flex;
align-items: center;
flex-direction: column;
`
const Text = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 40px;
color: #FFFFFF;
`

const Button = styled.button`
text-decoration : none
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 40px;
padding : 5px 10px 5px 10px;
color: #FFFFFF;
border: 3px solid #FFFFFF;
border-radius: 10px;
background-color : #F2EDD0;
`
export default function NotFound() {
    const navigate = useNavigate();

    const handleOnclick = (e) =>{
        navigate(-1);
    }
  return (
    <BackGround>
        <NovaMark/>
        <Text>노바 동아리원을 위한 공간입니다!!</Text>
        <Text>들어오지 말아주세요!!</Text>
        <Button onClick={handleOnclick}> <Vector/> 뒤로가기 </Button>
    </BackGround>
  )
}
