import React, { useState } from "react";
import styled from "@emotion/styled";
import jokbo1 from "../../../src/resource/cat.png";
//const TitleText = styled.div`

const ScrollContainerStyle = styled.div`
  display: absolute;
  overflow: auto;
  margin: 0 auto;
  margin-top: 51px;
  margin-bottom: 44px;
  white-space: nowrap;
  scrollbar-width: none;
  -webkit-box-align: center;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollItemStyle = styled.div`
  display: inline-block;
  text-align: center;
  background: rgba(36, 147, 191, 0.25);
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  border: 1px solid #000000;
  border-radius: 40px;
  box-shadow: 4px 4px 0px #000000;
  width: 264px;
  height: 572px;
`;
const ItemImage = styled.img`
  margin-top: 20px;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

const ItemTitle = styled.h2`
  font-size: 16px;
`;

const ItemContent = styled.pre`
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  overflow: auto;
  white-space: pre-wrap;
`;

const ArrowIcon = styled.span`
  font-size: 2em;
  font-family: "Material Symbols Outlined";
`;

export default function Jokbo({ selectedJokbo }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const container = e.currentTarget;
    const scrollAmount = e.deltaY;
    container.scrollLeft += scrollAmount;
  };

  const data = {
    "1학년": [...Array(50)].map(
      (_, i) => `내 두 눈 밤이면 별이 되지 
    나의 집은 뒷골목 달과 별이 뜨지요 
    두 번 다신 생선가게 털지 않아
    서럽게 울던 날들 나는 외톨이라네 
    이젠 바다로 떠날 거예요 (더 자유롭게)
    거미로 그물 쳐서 물고기 잡으러 
    나는 낭만 고양이 
    슬픈 도시를 비춰 춤추는 작은 별빛
    나는 낭만 고양이 
    홀로 떠나가버린 깊고 슬픈 나의 바다여 
    깊은 바다 자유롭게 날던 내가 
    한없이 밑으로만 가라앉고 있는데 ${i + 1}`
    ),
    "2학년": [...Array(50)].map((_, i) => `2학년 컨텐츠 ${i + 1}`),
    "3학년": [...Array(50)].map((_, i) => `3학년 컨텐츠 ${i + 1}`),
    "4학년": [...Array(50)].map((_, i) => `4학년 컨텐츠 ${i + 1}`),
  };

  return (
    <ScrollContainerStyle
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
    >
      {data[selectedJokbo].map((content, i) => (
        <ScrollItemStyle key={i}>
          <ItemImage src={jokbo1} alt="Item Image" />
          <ItemTitle>낭만고양이</ItemTitle>
          <ItemContent>{content}</ItemContent>
          <ArrowIcon>arrow_forward</ArrowIcon>
        </ScrollItemStyle>
      ))}
    </ScrollContainerStyle>
  );
}
