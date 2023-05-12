import React,{useEffect,useState,useRef} from 'react'
import {NavLink,useNavigate } from "react-router-dom";
import styled from '@emotion/styled'


const MainHeader = styled.div`
max-width : 1200px;
width : 100%;
margin : 0 auto;
height : 100%;
display : flex;
flex-direction: column;
`
const Header = styled.div`
max-width : 1200px;
width : 100%;
margin : 0 auto;
height : 99px;
display : flex;
align-items: center;
border-bottom : 2px solid #BBBBBB;
`

const Name = styled.div`
display : flex;
width : 90px;
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
margin-left : 90px;
gap : 50px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 20px;
margin-top : 10px;
margin-bottom : 0px;
div{
    color : #666666;
}
div:hover
{
  color: #2493BF;
}
li{
  text-align : center;
  width : 150px;
}
`
const Sign = styled.ul`
display: flex;
flex-direction: row;
margin-left: auto;
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

const SubHeader = styled.div`
max-width : 1200px;
width : 100%;
margin : 0 auto;
display : none;
`
const SubMenu = styled.ul`
display: flex;
flex-direction: row;
margin-left : 180px;
gap : 50px;
li{
  text-align : center;
  width : 150px;
}
`
const Depth = styled.ul`
display: flex;
flex-direction: column;
gap : 7px;
li{
  color:#5D5D5D;
}
.active li{
  color: #2493BF;
}
`
export default function Banner() {
  const SubHeaderef = useRef(null);
  const MainHeaderRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/nova");
  }

  useEffect( ()=>{
    const subheader =SubHeaderef.current;
    const mainheader = MainHeaderRef.current;

    function Mouseover()
    {
      subheader.style.display="flex";
    }
    function Mouseout()
    {
      console.log("123")
      subheader.style.display="none";
    }

    mainheader.addEventListener('mouseout' ,Mouseout);
    mainheader.addEventListener('mouseover', Mouseover);
    return () =>{
      mainheader.removeEventListener('mouseout' ,Mouseout);
      mainheader.removeEventListener('mouseover', Mouseover);
    };
  },[])
  return (
    <>

    <MainHeader ref={MainHeaderRef}>
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
    <SubHeader ref={SubHeaderef}>
    <SubMenu>
      <li>
        <Depth>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        </Depth>
      </li>
      <li>
        <Depth>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        </Depth>
        </li>
      <li>
        <Depth>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        </Depth>
        </li>
      <li>
        <Depth>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        <NavLink to="notice"><li>공지사항</li></NavLink>
        </Depth>
        </li>
    </SubMenu>
    </SubHeader>

    </MainHeader>
    </>
  )
}
