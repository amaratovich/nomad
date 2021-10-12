import React from 'react'
import styled from "styled-components"
import FooterLogo from "../../assets/footer-logo.png"

const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="content">
                    <div className="footer_logo">
                        <img src={FooterLogo} alt=""/>
                    </div>
                    <div className="footer_links">
                        <div>
                            <a href="#">Пункты приема-выдач</a>
                        </div>
                        <div>
                            <a href="#">Контакты</a>
                        </div>
                        <div>
                            <a href="#">Мы в социальных сетях</a>
                        </div>
                    </div>
                    <div className = "footer_info">
                    <p>ул. Туголбай - Ата, 67</p>
                     <div className = "phone_numbers">
                         <a href="#">0558 08 99 88 (WhatsApp)</a>
                         <a href="#">0707 08 99 88</a>
                         <a href="#">0777 08 99 88</a>
                     </div>
                        <p>Рабочие часы: c 9:00 до 19:00 (без выходных)</p>
                        <p>kgnomadexpress@gmail.com</p>
                    </div>
                    <div className = "footer_footer">
                    <p>© 2021 NomadExpress. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
  padding: 16px 0 27px;
  background: #81BB43;;
  .content {
    .footer_logo {
      text-align: center;
    }
    .footer_links{
      display: flex;
      justify-content: space-around;
      margin-top: 16px;
      margin-bottom: 24px;
      @media(max-width: 600px){
        flex-direction: column;
        align-items: center;
      }
      a{
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        text-decoration-line: underline;
        color: #FFFFFF;
        @media(max-width: 600px){
          line-height: 34px;
          font-size: 16px;
        }
      }
    }
  }
  .footer_info{
    text-align: center;
    p{
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #FFFFFF;
      line-height: 30px;
    }
    .phone_numbers{
  
      a{
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
      }
    }
  }
  .footer_footer{
    text-align: center;
    margin-top: 26px;
    p{
      font-family: Gilroy-Regular;
      font-size: 14px;
      line-height: 24px;
      font-feature-settings: 'liga' off;
      color: #FFFFFF;
    }
  }
`
