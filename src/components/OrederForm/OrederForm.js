import React, {useState} from "react";
import styled from "styled-components";
import OrderFormInputsForBishkek from "./OrderFormInputsForBishkek";
import OrderInputFormsForKyrgyzstan from "./OrderInputFormsForKyrgyzstan";

const OrderForm = () => {
	const [isBishkekActive, setIsBishkekActive] = useState(true);

	const changeActive = () => {
		setIsBishkekActive(!isBishkekActive);
	};

	return (
		<Wrapper>
			<div className="order_content">
				<div className="order_header">
					<h3>Оформление заявки</h3>
					<div className="order_header_buttons">
						<button
							className={`order_header_button ${isBishkekActive && "active"}`}
							onClick={changeActive}
						>
							Бишкек
						</button>
						<button
							className={`order_header_button ${!isBishkekActive && "active"}`}
							onClick={changeActive}
						>
							Кыргызстан
						</button>
					</div>
				</div>
				{isBishkekActive ? (
					<OrderFormInputsForBishkek/>
				) : (
					<OrderInputFormsForKyrgyzstan/>
				)}
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
          padding: 10px 30px;
        }
      }
    }
  }
`;
