import React, {useState} from 'react'
import styled from "styled-components"
import HomeBackgroundBish from "../../assets/home-background.png"
import HomeBackgroundKyr from "../../assets/home-background-kg.png"
import OrederForm from "../OrederForm/OrederForm";
import ResponsiveHeader from "../ResponsiveNavbar/ResponsiveHeader";
import {useTranslation} from "react-i18next";

const Home = ({lang}) => {
	const [isBishkekActive, setIsBishkekActive] = useState(true);
	const changeActive = () => setIsBishkekActive(!isBishkekActive)
	return (
		<Wrapper>
			<div className="home_container">
				<div className="home_bg">
						<img src={isBishkekActive ? HomeBackgroundBish : HomeBackgroundKyr} alt=""/>
				</div>
				<div className="container">
					<div className="responsive_header">
						<ResponsiveHeader/>
					</div>
					<OrederForm active={isBishkekActive} setActive={changeActive} lang={lang}/>
				</div>
			</div>
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.div`
  position: relative;
  min-height: 80vh;
  //padding-top: 118px;
  padding-bottom: 15px;
  //margin-top: 100px;
  z-index: 10;

  .responsive_header {
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
  }

  .home_bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    //top: -118px;

    img {
      width: 100%;
      height: 102%;
      //min-height: 100vh;
      background-position: right;
      background-size: contain;
      object-fit: cover;
      background-repeat: no-repeat;
      @media (max-width: 768px) {
        height: auto;
        margin-top: 79px;
        height: 300px;
      }
      @media (max-width: 500px) {
        margin-top: 79px;
        height: 250px;
      }

    }
  }

  .home_container {
    padding-top: 118px;
    @media (min-width: 1400px) {
      max-width: 1200px;
      position: relative;
      margin: 0 auto;

    }
  }
`
