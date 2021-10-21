import React from 'react'
import styled from "styled-components"
import SectionTitles from "../SectionTitles";
import AboutImage from "../../assets/about-content-image.png"
import {useTranslation} from "react-i18next";

const AboutNomad = () => {
    const {t} = useTranslation()
    return (
        <Wrapper id={"aboutus"}>
            <div className="container">
                <SectionTitles right={true}>{t('aboutNomad.О_NomadExpress')}</SectionTitles>
                <div className="about_content">
                    <div className="text">
                        <p>{t('aboutNomad.paragraph1')}</p>
                        <p>{t('aboutNomad.paragraph2')}</p>
                        <p>{t('aboutNomad.paragraph3')}</p>
                    </div>
                    <div className="image">
                        <img src={AboutImage} alt=""/>
                    </div>
                </div>
                <div className = "about_footer_text">
                <p>{t('aboutNomad.info')}</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default AboutNomad

const Wrapper = styled.div`
  padding: 90px 0px;
@media(max-width: 768px){
  padding: 40px 0px;
}
  .about_content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    padding-top: 30px;
    grid-column-gap: 100px;
    @media(max-width: 760px){
      display: block;
    }

    .image {
      img {
        width: 100%;
        //height: 100%;
      }
    }
  }
  .text{
    width: 500px;
    position: relative;
    @media(max-width: 900px){
      max-width:400px;
    }
    @media(max-width: 760px){
      width:100%;
      margin:  0 auto;
    }
    &:before{
      position: absolute;
      content:"";
      left: -20px;
      top:0;
      background: rgba(189, 219, 159, 0.5);
      height: 58px;
      width: 170px;
      z-index: -1;
    }
    
    p{
      margin-bottom: 20px;
      font-weight: normal;
      font-size: 22px;
      line-height: 131.4%;
      color: #22343D;
      @media(max-width: 768px){
        width: 100%;
        margin:  0 auto;
        margin-bottom: 20px;
        font-size: 16px;
      }
    }
  }
  .about_footer_text{
    position: relative;
    width: 80%;
    margin: 0 auto;
    margin-top: 80px;
    @media(max-width: 768px){
      font-size: 16px;
    }
    &:before{
      position: absolute;
      content:"";
      top: -22px;
      left: -118px;
      background: rgba(189,219,159,0.5);
      height: 67px;
      width: 519px;
z-index: -1;
      @media(max-width: 768px){
        width: 180px;
        height: 20px;
        top: 5px;
        left: -40px;
      }
    }
    p{
      font-weight: 500;
      font-size: 24px;
      line-height: 151.4%;
      text-align: center;
      color: #35834F;
      text-align: center;
      @media(max-width: 768px){
        font-size: 16px;
      }
    }
  }

`
