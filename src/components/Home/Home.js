import React from 'react'
import styled from "styled-components"
import HomeBackground from "../../assets/home-background.png"
import OrederForm from "../OrederForm/OrederForm";
import Services from "../Services/Services";
import ResponsiveHeader from "../ResponsiveNavbar/ResponsiveHeader";

const Home = () => {
	return (
		<Wrapper>
			<div className="home_container">
				<div className="home_bg">
					<img src={HomeBackground} alt=""/>
				</div>
				<div className="container">
					<div className="responsive_header">
						<ResponsiveHeader/>
					</div>
					<OrederForm/>
				</div>
			</div>
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.div`
  position: relative;
  //min-height: 100vh;
  padding-top: 118px;
  padding-bottom: 15px;
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

    img {
      width: 100%;
      height: 100%;
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
    @media (min-width: 1400px) {
      max-width: 1200px;
      position: relative;
      margin: 0 auto;

    }
  }
`
