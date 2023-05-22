import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

//const TitleText = styled.div`

const JokboSelectStyleWrapper = styled.div`
  margin-top: 20px;
`;

const JokboSelectStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-family: "Noto Sans", sans-serif;
  margin-bottom: 1rem;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 4px;
    color: #fff;
    background-color: #2493bf;
    border: 1px solid black;
    font-weight: 600;
    &.active,
    &:hover {
      background-color: #1b57a6;
      color: #fff;
    }
  }
`;

export default function JokboSelect({ selectedJokbo, setSelectedJokbo }) {
  const grades = ["1학년", "2학년", "3학년", "4학년"];

  const handleJokboChange = (e) => {
    e.preventDefault();
    setSelectedJokbo(e.target.innerText);
  };

  return (
    <JokboSelectStyleWrapper>
      <JokboSelectStyle>
        {grades.map((grade) => (
          <a
            key={grade}
            href="#"
            className={selectedJokbo === grade ? "active" : ""}
            onClick={handleJokboChange}
          >
            {grade}
          </a>
        ))}
      </JokboSelectStyle>
    </JokboSelectStyleWrapper>
  );
}
