import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TitleText = styled.div`
  color: #2493bf;
  width: 100%;
  font-size: 60px;
  margin-top: 30px;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  text-decoration: none;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1px;
    width: 8%;
    height: 3px;

    background-color: #2493bf;
    box-shadow: 0px 0px 0px 1px black;
    border-radius: 10px;
  }
`;

export default function JokboTitle() {
  const title = "족보";

  return (
    <>
      <TitleText>{title}</TitleText>
    </>
  );
}
