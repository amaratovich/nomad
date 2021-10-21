import React from 'react'
import styled from "styled-components"
import BackgroundImage from "../../assets/TrackPakcages-bg.png"
import SectionTitles from "../SectionTitles";
import {useTranslation} from "react-i18next";

const TrackPackages = () => {
	const {t} = useTranslation()
	return (
		<Wrapper id={"tracking"}>
			<div className="big_container">
				<div className="background_image">
					<img src={BackgroundImage} alt=""/>
				</div>
				<div className="container">
					<h1 className = "main_title">{t('tracking.Ваше_доверие-наша_работа')}</h1>
					<div className="content">
						<div className="content_inner">
							<SectionTitles black={false} right={false}>{t('navbar.Отследить_посылку')} (трекинг)</SectionTitles>
							<form>
								<input type="text" className="package_track_input"
								       placeholder={t("tracking.Введите_ваш_трекинг_номер")}/>
								<div className="button">
									<button>{t('tracking.Отследить')}</button>
								</div>
							</form>
							<div className="info_text">
								{t('tracking.info')}
							</div>
						</div>
					</div>
				</div>
			</div>

		</Wrapper>
	)
}

export default TrackPackages

const Wrapper = styled.div`
  //min-height: 100vh;
  position: relative;
  padding-bottom: 162px;
  @media (max-width: 768px) {
    padding-bottom: 32px;
  }
  h1.main_title {
    font-weight: normal;
    //font-size: clamp(36px, 4vw, 66px);
    font-size: 66px;
    line-height: 90px;
    text-align: center;
    color: #35834F;
    opacity: 0.15;
    font-family: Lucida Calligraphy;
    font-style: italic;
    position: relative;
    display: block;
    z-index: 100;
    text-align: left;
    white-space: nowrap;
    margin: 0 auto;
    text-align: center;
    @media (max-width: 860px) {

      font-size: 50px;
    }
    @media (max-width: 768px) {
      white-space: pre-wrap;
      line-height: 40px;
      text-align: center;
      font-size: 44px;
    }
  }
  .background_image {
    position: absolute;
    inset: 0;
    //box-shadow: inset 0 -234px 54px -110px #fff;
    //height: 335px;
    //width: 280px;
    //min-height: 100vh;

    &:before {
      position: absolute;
      content: "";
      //background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ,rgba(0, 0, 0, 0.3));
      background-image: linear-gradient(
              0deg,rgba(255,255,255,0.4),rgba(255,255,255,1));
      height: 150px;
      width: 100%;
      z-index: 10;
      top: -16px;
    }

    img {
      width: 100%;
      height: 100%;
      background-position: right;
      background-size: contain;
      object-fit: cover;
      background-repeat: no-repeat;
      position: relative;
      @media (max-width: 768px) {
        height: 75%;
      }
    }
  }
}

.content {
  z-index: 100;
  position: relative;
  width: 60%;
  //padding-top:40px 0px ;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }



  form {
    width: 90%;
    position: relative;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }

    .button {
      position: absolute;
      top: 20px;
      right: 51px;
      padding: 10px 13px;
      background: #000;
      background: #35834F;
      border-radius: 20px;
      @media (max-width: 760px) {
        right: 50px;
      }
      @media (max-width: 500px) {
        padding: 5px 10px;
        padding-bottom: 7px;
        right: 20px;
      }

      button {
        background: transparent;
        outline: none;
        border: none;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
        color: #FFFFFF;
        @media (max-width: 500px) {
          font-size: 11px;
          //padding: 10px ;
        }
      }
    }

    .package_track_input {
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid #808080;
      box-sizing: border-box;
      border-radius: 9px;
      padding: 20px 12px;
      outline: none;
      width: 90%;
      margin-top: 10px;
      margin-bottom: 5px;

      ::placeholder {
        color: #0a0a0a;
      }
    }


  }

  .content_inner {
    padding-top: 75px;
    text-align: center;
  }

  .info_text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-top: 32px;
    width: 70%;
    text-align: left;
    margin-left: 30px;
    @media (max-width: 768px) {
      width: 90%;
      margin: 0 auto;
      color: #000;
      margin-top: 80px;
    }
  }
`
