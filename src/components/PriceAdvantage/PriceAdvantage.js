import React from 'react'
import styled from "styled-components"
import SectionTitles from "../SectionTitles";
import ItemBackground from "../../assets/price-advantage.png"
import PriceLogo from "../../assets/price-bg-icon.png"

const PriceAdvantage = () => {
    return (
        <Wrapper>
            <div className="container">
                <SectionTitles right={true}>Наши услуги и преимущества</SectionTitles>
                <h3>Мы предоставляем:</h3>
                <div className="buttons">
                    <button>Услуги выкупа</button>
                    <button>Доставку по городу Бишкек</button>
                    <button>Доставку по всему Кыргызстану</button>
                </div>
            </div>
            <div className="big_container">
                <div className="content">
                    <div className="container">
                        <div className="content_items">
                            <div className="content_item">
                                <div className="background_image">
                                    <img src={ItemBackground} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="logo">
                                        <img src={PriceLogo} alt=""/>
                                    </div>
                                    <h3>Оперативная доставка</h3>
                                    <p>Отгрузка со складов в Бишкеке ежедневно. Мы гарантируем короткие и точные
                                        сроки.</p>
                                </div>
                            </div>
                            <div className="content_item">
                                <div className="background_image">
                                    <img src={ItemBackground} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="logo">
                                        <img src={PriceLogo} alt=""/>
                                    </div>
                                    <h3>Оперативная доставка</h3>
                                    <p>Отгрузка со складов в Бишкеке ежедневно. Мы гарантируем короткие и точные
                                        сроки.</p>
                                </div>
                            </div>
                            <div className="content_item">
                                <div className="background_image">
                                    <img src={ItemBackground} alt=""/>
                                </div>
                                <div className="info">
                                    <div className="logo">
                                        <img src={PriceLogo} alt=""/>
                                    </div>
                                    <h3>Оперативная доставка</h3>
                                    <p>Отгрузка со складов в Бишкеке ежедневно. Мы гарантируем короткие и точные
                                        сроки.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Wrapper>
    )
}

export default PriceAdvantage

const Wrapper = styled.div`
  padding: 10px 0 90px;
    @media(max-width: 768px){
        padding: 10px 0 20px; 
    }

  h3 {
    font-weight: normal;
    font-size: 24px;
    line-height: 131.4%;
    color: #22343D;
    margin-bottom: 33px;
    @media(max-width: 500px){
      font-size: 16px;
    }

  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 58px;

    @media(max-width: 768px){
 //display: block;
      flex-direction: column;
      align-items: start;
    }
    button {
      //flex:1;
      padding: 11px 20px;
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 151.4%;
      text-align: center;
      color: #35834F;
      background: #FFFFFF;
      box-shadow: 0px 8px 24px rgba(12, 147, 89, 0.125);
      border-radius: 20px;
      border: none;
      outline: none;
      @media(max-width: 768px){
     margin: 20px 0;
        &:nth-child(2){
          margin-left: 35px;
        }
        &:nth-child(3){
          margin-left: 70px;
        }
      }
      @media(max-width: 768px){
        font-size: 14px;
      }
    }
  }

  .content {
    background: rgba(189, 219, 159, 0.5);
    padding: 57px 0;
    //min-height: 70vh;

    .content_items {
      //display: flex;
      //justify-content: space-between;
      //min-height: 100%;
      //flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(300px ,1fr));
grid-gap: 40px;

      .content_item {
        position: relative;
        //max-width: 350px;
        padding: 40px;
        margin: 20px;
        height: 300px;
        @media(max-width: 768px){
          min-height: 280px;
        }

        .background_image {
          position: absolute;
          inset: 0;
          //z-index: -1;
          //z-index: -1;
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            //height: 100%;
            object-fit: cover;
            background-position: center;
            background-size: cover;
            height: 100%;
            //height: 350px;
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            //filter: blur(2px);
            border-radius: 10px;
          }
        }
        .info {
          position: relative;
          z-index: 100;
          text-align: center;

          h3 {
            font-weight: bold;
            font-size: 20px;
            white-space: nowrap;
            text-align: center;
            letter-spacing: 0.1px;
            color: #FFFFFF;
            margin-bottom: 5px;
          }

          p {
            font-size: 16px;
            text-align: center;
            letter-spacing: 0.2px;
            color: #FFFFFF;
          }
          .logo{
            margin-bottom: 32px;
          }
        }


      }
    }
  }
`
