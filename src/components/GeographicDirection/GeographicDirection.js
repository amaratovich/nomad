import React from 'react'
import styled from "styled-components"
import SectionTitles from "../SectionTitles";
import BckgroundMap from "../../assets/Background map.png"
import RightArrow from "../../assets/Triangle-right-arrow.png"

const GeographicDirection = () => {
	return (
		<Wrapper>
			<div className="container">
				<header>
					<SectionTitles right={true}>Географические направления</SectionTitles>
				</header>
			</div>
			<div className="content">
				<div className="big_container">
					<div className="background_map">
						<img src={BckgroundMap} alt=""/>
					</div>
					<div className="container">
						<div className="content_inner">
							<div className="content_inner_item">
								<h3>Тарифы по Кыргызстану</h3>
								<p>время доставки 24 часа</p>
								<div className="price">
									200
								</div>
								<div className="location">
									Жалал-Абад, Ош, Нарын, Талас, Чуй, Иссык-Куль
								</div>
								<div className="location">
									Баткен (доплата 50 сом)
									<p>Баткен (доплата 50 сом)</p>
								</div>
							</div>
							<div className="content_inner_item second_item">
								<h3>Тарифы по городу</h3>
								<div className="info">
									<div className="price">
										200
									</div>
									<div className="text">
										<div>
											<img src={RightArrow} alt=""/>
										</div>
										<p> в течении дня</p>

									</div>
								</div>
								<div className="info">
									<div className="price">
										200
									</div>
									<div className="text">
										<div>
											<img src={RightArrow} alt=""/>
										</div>
										<p> в течении 3 часов (обычная)</p>

									</div>
								</div>
								<div className="info">
									<div className="price">
										200
									</div>
									<div className="text">
										<div>
											<img src={RightArrow} alt=""/>
										</div>
										<p> экспресс-срочная</p>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Wrapper>
	)
}

export default GeographicDirection

const Wrapper = styled.div`
  header {
    background: #fff;
  }

  .content {
    background: #F7EFE2;
    z-index: 100;
    margin-top: 100px;
    position: relative;
    padding-bottom: 47px;
    padding-top: 53px;


  }

  .background_map {
    position: absolute;
    top: -50px;
    z-index: -1;
    left: -20px;
    @media (max-width: 768px) {
      top: -20px;
    }

    img {
      width: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .price {
    display: flex;
    font-weight: bold;
    font-size: 76px;
    line-height: 100px;
    //text-align: center;
    letter-spacing: 0.2px;
    color: #35834F;
    position: relative;
    display: inline-block;

    :before {
      content: "от";
      position: absolute;
      left: -16px;
      top: 9px;
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0.1px;
      color: #22343D;
    }

    :after {
      content: "сом";
      position: absolute;
      right: -33px;
      bottom: 18px;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.1px;
      color: #AFAFAF;
      z-index: 100;
    }
  }

  .content_inner {
    display: flex;
    justify-content: right;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-top: 200px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
    }
  }

  .content_inner_item {
    text-align: center;
    background: #fff;
    padding: 18px 21px;
    margin-right: 52px;
    max-width: 320px;
    background: #FFFFFF;
    box-shadow: 0px 8px 24px rgba(104, 104, 104, 0.12);
    border-radius: 8px;
    margin-top: 28px;
    @media (max-width: 768px) {
      margin-right: 0;
    }

    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 40px;
      color: #22343D;
    }

    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 40px;
      color: #22343D;

    }

    .location {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.2px;
      color: #22343D;
      margin-top: 30px;

      p {
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.1px;
        color: #AFAFAF;
      }
    }

  }

  .second_item {
    background: #35834F;
    box-shadow: 0px 8px 24px rgba(104, 104, 104, 0.12);
    border-radius: 8px;
    padding: 18px 21px;
    margin-right: 20px;
    min-width: 320px;
    @media (max-width: 768px) {
      margin-right: 0;
      min-width: 0px;
    }

    h3 {
      color: #FFFFFF;
    }

    .price {
      display: flex;
      font-weight: bold;
      font-size: 48px;
      line-height: 100px;
      //text-align: center;
      letter-spacing: 0.2px;
      color: #fff;
      position: relative;
      display: inline-block;

      :before {
        content: "от";
        position: absolute;
        left: -16px;
        top: 9px;
        font-weight: bold;
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0.1px;
        color: #fff;
      }

      :after {
        content: "сом";
        position: absolute;
        right: -33px;
        bottom: 18px;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1px;
        color: #AFAFAF;
        z-index: 100;
      }

    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text {
        display: flex;
        align-items: center;

        img {
          margin-right: 10px;
        }

        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.2px;
          color: #FFFFFF;
        }
      }
    }
  }

`
