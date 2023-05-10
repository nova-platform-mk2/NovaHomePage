import React from 'react'
import styled from '@emotion/styled'

const FooterLayer = styled.div`
max-width : 1200px;
width : 100%
height : 109px;
border-top : 2px solid #BBBBBB;
display : flex;
flex-direction: column;
align-items: center;
margin : 0 auto;
padding : 30px;
box-sizing : border-box;
`
const Text = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #000000;
`
export default function Footer() {
  return (
    <FooterLayer>
      <Text>위치 : 청주시 서원구 상당로 111로 (모름)  / 연락처 : 010-0000-0000 / 회장 : 일훈, 부회장 : 양수진</Text>
      <Text>개인정보처리방침 | 이용약관 | 업무제휴 | 고객지원 | 방승재의 일상</Text>
    </FooterLayer>
  )
}
