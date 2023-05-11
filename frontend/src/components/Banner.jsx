import React,{useEffect,useState,useRef} from 'react'
import {NavLink,useNavigate } from "react-router-dom";
import styled from '@emotion/styled'

const Header = styled.div`
max-width : 1200px;
width : 100%;
margin : 0 auto;
height : 99px;
display : flex;
align-items: center;
justify-content: space-between;
border-bottom : 2px solid #BBBBBB;
`
const Name = styled.div`
display : flex;
font-family: 'Rubik One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 20px;
cursor: pointer;
color: #252525;
`

const Menu = styled.ul`
display: flex;
flex-direction: row;
gap : 90px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 20px;
div{
    color : #666666;
}
div:hover
{
  color: #2493BF;
}
`
const Sign = styled.ul`
display: flex;
flex-direction: row;
gap : 14px;
li{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #252525;
}
`
export default function Banner() {
  const menu1Ref = useRef(null);
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/nova");
  }

  useEffect( ()=>{

    
    return () =>{
    };
  },[])
  return (
    <>
    <Header>
        <Name onClick={handleClick}>NOVA</Name>

        <Menu>
          <li><div>Document</div></li>
          <li><div>Members</div></li>
          <li><div>Communication</div></li>
          <li><div>Play</div></li>
        </Menu>

        <Sign>
            <NavLink to="/signup"><li>Sign up</li></NavLink>
            <NavLink to="/signin"><li className='signin'>Sign in</li></NavLink>
        </Sign>
    </Header>
    </>
  )
}
