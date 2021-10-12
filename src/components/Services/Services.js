import React from 'react'
import styled from "styled-components"
import ServiceLogo from "../../assets/services_avatar.png"
import SectionTitles from "../SectionTitles";

const Services = () => {
    return (
        <Wrapper id={"services"}>
            <div className="container">
                <SectionTitles right={false} className="services_title">Формула расчета стоимости доставки</SectionTitles>

                <div className="services_content">
                    <header>
                        <h3 className="services_content_title">Длина × Ширина × Высота (см) / 5000 = Объемный вес
                            (кг/м³)</h3>
                        <h4 className="services_content_subtitle">Например: 30 × 30 × 30 / 5000 = 5.4 (объемный
                            вес)</h4>
                    </header>
                    <div className="services_content_items">
                        <div className="services_content_item">
                            <div className="img">
                                <img src={ServiceLogo} alt=""/>
                            </div>
                            <div className="info">
                                Если объем.вес ≤ 1 кг/м³, то цена 200 сом.
                            </div>
                        </div>
                        <div className="services_content_item">

                            <div className="info">
                                Если объем.вес ≤ 1 кг/м³, то цена 200 сом.
                            </div>
                            <div className="img">
                                <img src={ServiceLogo} alt=""/>
                            </div>
                        </div>
                        <div className="services_content_item">
                            <div className="info">
                                Если объем.вес ≤ 1 кг/м³, то цена 200 сом.
                            </div>
                            <div className="img">
                                <img src={ServiceLogo} alt=""/>
                            </div>

                        </div>
                        <div className="services_content_item">
                            <div className="img">
                                <img src={ServiceLogo} alt=""/>
                            </div>
                            <div className="info">
                                Если объем.вес ≤ 1 кг/м³, то цена 200 сом.
                            </div>
                        </div>
                    </div>
                    <div className="info_text">
                        Объем.вес > 300 кг/м³, то цена рассчитывается индивидуально.
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Services

const Wrapper = styled.div`
  padding-bottom: 50px;
  padding-top: 90px;
  //min-height: 100vh;
  position: relative;
  background: #FAF9F8;
    @media(max-width: 768px){
        padding-top: 40px;
    }
  .services_content {
    padding-top: 100px;
      @media(max-width: 768px){
          padding-top: 30px;
      }

    header {
      margin-bottom: 52px;
    }

    .services_content_title {
      font-weight: bold;
      font-size: 26px;
      line-height: 151.4%;
      text-align: center;
      color: #35824E;
        @media(max-width: 768px){
            font-size: 18px;
        }
    }

    .services_content_subtitle {
      font-weight: normal;
      font-size: 24px;
      line-height: 131.4%;
      color: #22343D;
      text-align: center;
        margin-top: 22px;
        @media(max-width: 768px){
            font-size: 16px;
        }
    }
  }

  .services_content_items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 52px;
    @media (max-width: 768px) {
      display: block;
      margin: 0 auto;
    }

    .services_content_item {
      margin-bottom: 35px;
      display: flex;
      align-items: start;
      @media (max-width: 768px) {
        margin-bottom: 35px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 500px) {
        margin-bottom: 42px;

      }

      .info {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #2F281E;
        padding: 14px 18px;
        background: #FFFFFF;
        box-shadow: 0px 2px 15px rgba(23, 58, 86, 0.1);
        border-radius: 27px;
        margin-left: 18px;
        margin-right: 10px;
      }
    }
  }

  .info_text {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #22343D;
    text-align: center;
    background: rgba(189, 219, 159, 0.5);
    width: 70%;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 30px;
    @media (max-width: 550px) {
      width: 95%;
    }
  }
`
