import React from 'react'
import styled from "styled-components"
import Facebook from "../../assets/facebook.png"
import WhatsApp from "../../assets/Whatsapp.png"
import Telegram from "../../assets/Telegram.png"
import Instagram from "../../assets/instagram .png"
import {YMaps, Map} from 'react-yandex-maps';
import {useTranslation} from "react-i18next";

const ContactUs = () => {
    const {t} = useTranslation()
    return (
        <Wrapper id={"contacts"}>
            <div className="container">
                <header>
                    <h3 className="title">{t('contactUs.Свяжитесь_с_нами')}</h3>
                    <p className="subtitle">{t('contactUs.info_call_back')}</p>
                    <div className="btn">
                        <a href={"tel:0706944347"}>{t('contactUs.Позвонить')}</a>
                    </div>
                    <ul className="social_icons">
                        <li>
                            <a href="#">
                                <img src={Facebook} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={WhatsApp} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Telegram} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Instagram} alt=""/>
                            </a>
                        </li>
                    </ul>

                </header>
                <div className="map">
                    <YMaps>
                        <Map defaultState={{center: [42.864578, 74.608965], zoom: 15,}} width={'100%'}
                             height={'60vh'}/>
                    </YMaps>
                    {/*<iframe*/}
                    {/*	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.4140904512465!2d74.60544341434502!3d42.86410331111518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7cdb49a22c9%3A0x3c593b7d77de8b7a!2zNjcg0YPQuy4g0KLRg9Cz0L7Qu9Cx0LDQuSDQkNGC0LAsINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1633578039546!5m2!1sru!2skg"*/}
                    {/*	style={{border: "0"}} allowFullScreen="" loading="lazy"></iframe>*/}
                </div>
            </div>
        </Wrapper>
    )
}

export default ContactUs

const Wrapper = styled.div`
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 30px;
  }

  .title {
    font-weight: bold;
    font-size: 26px;
    line-height: 39px;
    text-align: center;
    color: #22343D;
    margin-bottom: 18px;
    @media (max-width: 500px) {
      font-size: 18px;
    }
  }

  .subtitle {
    padding: 0 30%;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #374754;
    margin-bottom: 18px;
    @media (max-width: 500px) {
      font-size: 16px;
      padding: 0;
    }
  }

  header {
    text-align: center;

    .btn {
      padding: 15px;
      margin-bottom: 20px;

      a {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
        background: #35834F;
        border-radius: 20px;
        border: none;
        outline: none;
        padding: 12px;
        margin-bottom: 20px;
      }
    }
  }

  .social_icons {
    display: flex;
    justify-content: center;

    li {
      margin-right: 42px;
      margin: 0 auto;
    }
  }

  .map {
    margin-top: 70px;

    .ymaps-2-1-79-map {
      width: 500px;
    }

    iframe {
      height: 600px;
      width: 100%;
      @media (max-width: 768px) {
        height: 320px;
      }
    }

  }
`
