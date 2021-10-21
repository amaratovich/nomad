import React from 'react'
import styled from "styled-components"
import GreenLine from "../assets/green_line.svg"

const SectionTitles = ({children, right, black = true}) => {
	return (
		<Wrapper right={right} black={black}>
			{children}
		</Wrapper>
	)
}

export default SectionTitles

const Wrapper = styled.div`
  position: relative;
  font-size: 26px;
  line-height: 39px;
  color: #22343D;
  color: ${({black}) => black ? "#22343D" : "#fff"};
  font-weight: bold;
  text-align: ${({right}) => right ? "right" : "left"};
  margin-bottom: 100px;
  @media (max-width: 768px) {
    font-size: 20px;
    white-space: nowrap;
    margin-bottom: 60px;
  }
  @media (max-width: 400px) {
    white-space: pre-wrap;
  }

  &:before {
    position: absolute;
    content: "";
    bottom: -70px;
    left: ${({right}) => right ? "auto" : "0px"};
    right: ${({right}) => right ? "-20px" : "auto"};
    background-image: url(${GreenLine});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 42px;
    transform: ${({right}) => right ? "rotate(180deg)" : null};
    @media (max-width: 1000px) {
      right: ${({right}) => right ? "-15px" : "auto"};
      left: ${({right}) => right ? "auto" : "-15px"};
    }
    @media (max-width: 768px) {
      right: ${({right}) => right ? "-15px" : "auto"};
      left: ${({right}) => right ? "auto" : "-15px"};
      bottom: -40px;
    }
  }
`
