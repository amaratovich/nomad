import React from 'react'
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import RussianLang from "../assets/russian_lang.svg"

const Navbar = () => {

    return (
        <Wrapper>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <ul>
                        <li><a href="#aboutus">О нас</a></li>
                        <li><a href="#services">Услуги</a></li>
                        <li><a href="#">Оформить заявку</a></li>
                        <li><a href="#tracking">Отследить посылку</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                    </ul>
                    <div className="navbar_language">
                        <p >
                            Rus
                        </p>
                        <span><img src={RussianLang} alt=""/></span>
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
  background: rgba(255,255,255,0.5);

  .navbar {
    display: flex;  
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  .logo{
    width: 70px;
    img{
      width: 100%
    
    }
  }
  ul{
    display: flex;
    @media(max-width: 900px){
      display: none;
    }
    li{
      margin-right: 52px;
      a{
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */


        color: #22343D;
      }
    }
  }
  .navbar_language{
    display: flex;
    align-items: center;
    span{
      margin-left: 10px;
    }
  }
`
