import React, {useState} from "react";
import styled from "styled-components";
import OrderFormInputsForBishkek from "./OrderFormInputsForBishkek";
import OrderInputFormsForKyrgyzstan from "./OrderInputFormsForKyrgyzstan";
import {useTranslation} from "react-i18next";

const OrderForm = ({active,setActive, lang}) => {


	const {t} = useTranslation()
	return (
		<Wrapper>
			<div className="order_content">
				<div className="order_header">
					<h3>{t('form.Оформление_заявки')}</h3>
					<div className="order_header_buttons">
						<button
							className={`order_header_button ${active && "active"}`}
							onClick={setActive}
						>
							Бишкек
						</button>
						<button
							className={`order_header_button ${!active && "active"}`}
							onClick={setActive}
						>
							Кыргызстан
						</button>
					</div>
				</div>
				{
					active
					?
					<OrderFormInputsForBishkek lang={lang}/>
					:
					<OrderInputFormsForKyrgyzstan lang={lang}/>
				}
			</div>
		</Wrapper>
	);
};

export default OrderForm;

const Wrapper = styled.div`
  width: 65%;
  padding: 34px 32px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 40px;
  margin-left: 60px;
  @media (max-width: 768px) {
    width: 99%;
    margin: 0 auto;
    padding: 14px 0px;
    margin-top: 60px;
  }

  .order_content {
    .order_header {
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 768px) {
        display: block;
      }

      h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #22343d;
        @media (max-width: 768px) {
          margin-bottom: 16px;
        }
      }

      .order_header_buttons {
        background: rgba(6, 73, 44, 0.05);
        border-radius: 12px;
        padding: 5px 10px;
        margin: 0 auto;
        text-align: center;
        display: inline-block;
        display: flex;
        justify-content: center;

        .order_header_button {
          border: none;
          cursor: pointer;
          outline: none;
          background: transparent;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          color: #35824e;
		  padding: 10px 20px;
          @media (max-width: 768px) {
            font-size: 16px;
          }

          &:last-child {
            margin-left: 32px;
          }
        }

        .active {
          font-weight: 500;
          background: #ffffff;
          box-shadow: 0px 8px 24px rgba(129, 187, 67, 0.16);
          border-radius: 12px;
          padding: 10px 20px;
        }
      }
    }
  }
`;
