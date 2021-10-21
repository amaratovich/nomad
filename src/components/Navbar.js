import React, {useEffect, useRef, useState} from 'react'
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import RussianLang from "../assets/russian_lang.svg"
import KgLang from "../assets/kgLang.png"
import {useTranslation} from "react-i18next";

const Navbar = ({langLogo,setLangLogo}) => {

    const {t, i18n} = useTranslation();

    const setToLocalStorage = (key, value) => localStorage.setItem(key, value)

    const changeLangHandler = (e) => {
        if (e.target.value === 'ru') {
            setLangLogo('ru')
            i18n.changeLanguage('ru')
            setToLocalStorage('lang', 'ru')
        } else {
            setLangLogo('kg')
            i18n.changeLanguage('kg')
            setToLocalStorage('lang', 'kg')
        }
    }
    return (
        <Wrapper>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <ul>
                        <li><a href="#aboutus">{t('navbar.О_нас')}</a></li>
                        <li><a href="#services">{t('navbar.Услуги')}</a></li>
                        <li><a href="#">{t('navbar.Оформить_заявку')}</a></li>
                        <li><a href="#tracking">{t('navbar.Отследить_посылку')}</a></li>
                        <li><a href="#contacts">{t('navbar.Контакты')}</a></li>
                    </ul>
                    <div className="navbar_language">
                        <select className={'navbar_language_select'} onChange={changeLangHandler} value={langLogo}>
                                    <option value={'ru'}>{'Русский'}</option>
                                    <option value={'kg'}>{'Кыргызча'}</option>
                        </select>
                        <span><img src={langLogo == 'ru' ? RussianLang : KgLang} alt="" className={'logo_lang'}/></span>
                    </div>
                </nav>
            </div>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
  position: absolute;
  height: 80px;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 1);

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  .logo {
    width: 70px;
    @media (max-width: 752px) {
      width: 60px;
    }

    img {
      width: 100%

    }
  }

  ul {
    display: flex;
    @media (max-width: 900px) {
      display: none;
    }

    li {
      margin-right: 52px;

      a {
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        color: #22343D;
      }
    }
  }

  .navbar_language {
    display: flex;
    align-items: center;

    .navbar_language_select {
      outline: none;
      border: none;
      padding: 5px;
      background: none;
      font-size: 16px;
    }

    .logo_lang {
      width: 35px;
      border-radius: 50%;
    }

    span {
      margin-left: 10px;
    }
  }
`
