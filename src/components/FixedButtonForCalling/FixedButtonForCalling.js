import React, {useState} from 'react'
import styled from "styled-components"
import CallIcon from "../../assets/CallIcon.png"
import WhatsappIcon from "../../assets/Whatsapp.png"
import TelegramIcon from "../../assets/Telegram.png"
import CallIconResponsive from "../../assets/CallIconResponsiveIcon.png"
import CloseIcon from "../../assets/close.png"

const FixedButton = ({children}) => {

    const [btnVisible, setBtnVisible] = useState(false)
    const visibleBtnHandler = () => setBtnVisible(!btnVisible)
    return (
        <ActiveWrapper>
            <div className={btnVisible ? 'active' : 'hidden'}>
                <Wrapper>
                    <div>
                        <a className="icon" href={"https://wa.me/755399553"} target='_blank'>
                            <img className="icon_image" src={WhatsappIcon} alt=""/>
                            <img src={WhatsappIcon} className="responsive_icon" alt=""/>
                        </a>
                        <a className="text" href={"https://wa.me/0755399553"} target="_blank">Whatsapp</a>
                    </div>
                </Wrapper>
                <Wrapper>
                    <div>
                        <a className="icon" href={"https://telegram.me/aza20010516"} target='_blank'>
                            <img className="icon_image" src={TelegramIcon} alt=""/>
                            <img src={TelegramIcon} className="responsive_icon" alt=""/>
                        </a>
                        <a className="text" href={"https://telegram.me/aza20010516"} target='_blank'>Telegram</a>
                    </div>
                </Wrapper>
                <Wrapper>
                    <div>
                        <a className="icon" href={'tel:123123123'}>
                            <img className="icon_image" src={CallIcon} alt=""/>
                            <img src={CallIconResponsive} className="responsive_icon" alt=""/>
                        </a>
                        <a className="text" href={'tel:123123123'}>0555232334</a>
                    </div>
                </Wrapper>
            </div>
            <Wrapper onClick={visibleBtnHandler}>
                <div>
                    <a className="icon">
                        <img className="icon_image" src={CallIcon} alt=""/>
                        <img src={btnVisible ? CloseIcon : CallIconResponsive} className="responsive_icon" alt=""/>
                    </a>
                    <a className="text">{children}</a>
                </div>
            </Wrapper>
        </ActiveWrapper>
    )
}

export default FixedButton

const ActiveWrapper = styled.div`
  
  .active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.2s ease-in-out;

  }
  .hidden {
    transform: translateY(20%);
    opacity: 0;
    position: relative;
    z-index: -2;
    transition: all 0.2s ease-in-out;
    
  }
`
const Wrapper = styled.div`
  text-align: center;
  cursor: pointer;
  margin-top: 15px;
  padding: 15px 20px;
  background: #FFFFFF;
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
  border-radius: 50px;
  transform: scale(1);
  animation: pulse-button 1.5s infinite;
  @media (max-width: 768px) {
    padding: 5px;
    bottom: 40%;
    margin-top: 10px;
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
      margin-right: 0;
      .icon_image {
        display: none;
      }

      .responsive_icon {
        display: block;
        width: 50px;
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
