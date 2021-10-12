import React, {useState} from "react";
import styled from "styled-components";
import SelectArrow from "../../assets/select_arrow.png"

const OrderFormInputs = () => {
	//sender inputs
	const [senderName, setSenderName] = useState("");
	const [nameTouched, setNameTouched] = useState(false)
	const [senderPhoneNumber, setSenderPhoneNumber] = useState("");
	const [senderPhoneNumberTouched, setSenderPhoneNumberTouched] = useState(false);


	//reciever inputs
	const [recieverName, setRecieverName] = useState("");
	const [recieverNameTouched, setRecieverNameTouched] = useState(false);
	const [recieverPhoneNumber, setRecieverPhoneNumber] = useState("");
	const [recieverPhoneNumberTouched, setrecieverPhoneNumberTouched] = useState(false);

	//delivery inputs
	const [deliveryType, setdeliveryType] = useState("");
	const [deliveryWeight, setdeliveryWeight] = useState("");
	const [deliveryHeight, setdeliveryHeight] = useState("");
	const [deliveryWidth, setdeliveryWidth] = useState("");
	const [deliveryLength, setdeliveryLength] = useState("");

	//to city
	const [toCityName, settoCityName] = useState("");
	const [toCityAddress, settoCityAddress] = useState("");

	//from city
	const [fromCityName, setfromCityName] = useState("");
	const [fromCityAddress, setfromCityAddress] = useState("");

	const [additionalDescrition, setAdditionalDescrition] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();


	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<div className="order_content_inner">
					<div className="order_content_inner_item">
						<div>
							<h3>Отправителя</h3>
							<input
								className="custom_input"
								type="text"
								placeholder={"Имя"}
								required={true}
								value={senderName}
								onChange={(e) => setSenderName(e.target.value)}
								onFocus={() => setNameTouched(true)}
								onBlur={() => setNameTouched(false)}

							/>
							{
								nameTouched && !senderName && <small>*обязательное поле</small>
							}

							<input
								className="custom_input"
								type="number"
								placeholder={"Телефон"}
								value={senderPhoneNumber}
								onChange={(e) => setSenderPhoneNumber(e.target.value)}
								onFocus={() => setSenderPhoneNumberTouched(true)}
								onBlur={() => setSenderPhoneNumberTouched(false)}

							/>
							{
								!senderPhoneNumber && senderPhoneNumberTouched && <small>*обязательное поле</small>
							}

						</div>
						<div>
							<h3>Откуда: Город</h3>
							<div className="select_tag_parent">
								<select name="" id="" className="custom_input select_tag">
									<option value="Бишкек">Бишкек</option>
									<option value="Бишкек">Токмок</option>
									<option value="Бишкек">Кара-Балта</option>
									<option value="Бишкек">Кант</option>
								</select>
								<small>*обязательное поле</small>
							</div>
							{/* <input
                className="custom_input"
                type="text"
                placeholder={"Имя"}
                required={true}
              /> */}

							<input
								className="custom_input"
								type="number"
								placeholder={"Телефон"}
							/>
							<small>*обязательное поле</small>
							<div className="long_input">
								<input
									className="custom_input "
									type="number"
									placeholder={"Дополнительное описание"}
								/>
								<small>*обязательное поле</small>
							</div>
						</div>
					</div>

					<div className="order_content_inner_item">
						<div>
							<h3>Получателя</h3>
							<input
								className="custom_input"
								type="text"
								placeholder={"Имя"}
								required={true}
								value={recieverName}
								onChange={(e) => setRecieverName(e.target.value)}
								onFocus={() => setRecieverNameTouched(true)}
								onBlur={() => setRecieverNameTouched(false)}

							/>
							{
								!recieverName &&  recieverNameTouched && <small>*обязательное поле</small>
							}

							<input
								className="custom_input"
								type="number"
								placeholder={"Телефон"}
								value = {recieverPhoneNumber}
								onChange = {(e) => setRecieverPhoneNumber(e.target.value)}
								onFocus={()=>setrecieverPhoneNumberTouched(true)}
								onBlur={()=>setrecieverPhoneNumberTouched(false)}

							/>
							{
								!recieverPhoneNumber && recieverPhoneNumberTouched && <small>*обязательное поле</small>
							}

						</div>
						<div>
							<h3>Куда: Город</h3>
							<div className="select_tag_parent">
								<select name="" id="" className="custom_input select_tag">
									<option value="Бишкек">Ош</option>
									<option value="Бишкек">Токмок</option>
									<option value="Бишкек">Кара-Балта</option>
									<option value="Бишкек">Кант</option>
								</select>
								<small>*обязательное поле</small>
							</div>
							<input
								className="custom_input"
								type="number"
								placeholder={"Телефон"}
							/>
							<small>*обязательное поле</small>
						</div>
					</div>
					<div className="order_content_inner_item">
						<div>
							<h3>Данные о доставке</h3>
							<div className="select_tag_parent">
								<select name="" id="" className="custom_input select_tag">
									<option value="Тип посылки/груза">Тип посылки/груза</option>
									<option value="Бишкек">Тип посылки/груза</option>
									<option value="Бишкек">Тип посылки/груза-Балта</option>
									<option value="Бишкек">Тип посылки/груза</option>
								</select>
								<small>*обязательное поле</small>
							</div>
							<input
								className="custom_input"
								type="number"
								placeholder={"Вес в кг."}
							/>
							<small>*обязательное поле</small>
						</div>
						<div>
							<h3 style={{color: "transparent"}}>d</h3>
							<input
								className="custom_input"
								type="text"
								placeholder={"Высота в см."}
								required={true}
							/>
							<small>*обязательное поле</small>
							<input
								className="custom_input"
								type="number"
								placeholder={"Ширина в см."}
							/>
							<small>*обязательное поле</small>
							<div>
								<input
									className="custom_input"
									type="number"
									placeholder={"Длина в см."}
								/>
								<small>*обязательное поле</small>
								<div className="long_input_responsive">
									<input
										className="custom_input "
										type="number"
										placeholder={"Дополнительное описание"}
									/>
									<small>*обязательное поле</small>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="order_content_footer">
					<div className="order_content_footer_info">
						<p>Стоимость доставки: 300 сом.</p>
						<p>Примерное время: 24 часа.</p>
					</div>
					<div className="order_content_footer_button">
						<button type={"submit"}>Оформить заявку</button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default OrderFormInputs;

const Wrapper = styled.div`
  .order_content_inner {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    }

    h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 28px;
      color: #22343d;
      white-space: nowrap;
      @media (max-width: 768px) {
        white-space: pre-wrap;
      }
    }
  }

  small {
    display: none;
    color: red;
  }

  .select_tag_parent {
    position: relative;

    :before {
      content: "";
      position: absolute;
      background-image: url(${SelectArrow});
      top: 26px;
      right: 28px;
      background-repeat: no-repeat;
      z-index: 1;
      width: 20px;
      height: 20px;
    }

    .select_tag {
      //width: 268px;
      font-size: 16px;
      line-height: 1;
      border: 0;
      //height: 34px;
      background: #F0F0F0;
      appearance: none;
      -webkit-appearance: none;
      background-position-x: 244px;
      position: relative;


    }
  }


  .order_content_inner_item {
    /* text-align: center; */
    @media (max-width: 768px) {
      text-align: center;
    }

    .long_input {
      /* margin-left: -15px; */
      width: 515px;
      @media (max-width: 1250px) {
        width: 500px;
      }
      @media (max-width: 1159px) {
        display: none;
      }
    }

    .long_input_responsive {
      display: none;
      @media (max-width: 1159px) {
        display: block;
      }
    }
  }

  .second {
    margin-top: 27px;
  }

  .third_grid_component {
    display: grid;
    grid-template-columns: 1fr 230px;

    .third_input {
      width: 100%;
    }
  }

  .order_content_footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    margin-top: 30px;
    @media (max-width: 768px) {
      display: block;
    }

    .order_content_footer_info {
      padding: 8px 13px;
      background: #ffffff;
      border: 1px solid #81bb43;
      box-sizing: border-box;
      border-radius: 9px;
      @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
      }

      p {
        font-weight: 300;
        font-size: 13px;
        line-height: 19px;
        color: #808080;
      }
    }

    .order_content_footer_button {
      text-align: center;

      button {
        padding: 17px 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        border: none;
        outline: none;
        background: #81bb43;
        box-shadow: 0px 4px 19px rgba(119, 147, 65, 0.3);
        border-radius: 10px;
        cursor: pointer;
        width: 100%;
        @media (max-width: 768px) {
          width: 90%;
          margin: 0 auto;
          margin-top: 26px;
        }
      }
    }
  }
`;
