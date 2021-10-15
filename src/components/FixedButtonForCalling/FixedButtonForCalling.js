import React from 'react'
import styled from "styled-components"
import CallIcon from "../../assets/CallIcon.png"
import CallIconResponsive from "../../assets/CallIconResponsiveIcon.png"

const FixedButton = ({children}) => {
	return (
		<Wrapper>
			<a className="icon" href={"tel:0706944347"}>
				<img className="icon_image" src={CallIcon} alt=""/>
				<img src={CallIconResponsive} className="responsive_icon" alt=""/>
			</a>
			<a className="text" href={"tel:0706944347"}>{children}</a>
		</Wrapper>
	)
}

export default FixedButton

const Wrapper = styled.div`
 
  cursor: pointer;
  padding: 15px 20px;
  background: #FFFFFF;
  //background: rgba(51, 217, 178, 1);
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
  border-radius: 50px;
  transform: scale(1);
  animation: pulse-button 1.5s infinite;
  @media (max-width: 768px) {
    background: #81BB43;
    padding: 10px;
    bottom: 40%;
    right: 2%;
  }
  @keyframes pulse-button {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
  }

  .icon {
    margin-right: 10px;

    .responsive_icon {
      display: none;
    }

    @media (max-width: 768px) {
      margin-right: 0px;
      .icon_image {
        display: none;
      }

      .responsive_icon {
        display: block;
      }
    }
  }

  a.text {
    letter-spacing: 1.25px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #35824E;
    @media (max-width: 768px) {
      display: none;
    }
  }
`
