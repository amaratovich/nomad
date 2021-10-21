import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SelectArrow from "../../assets/select_arrow.png"
import {useTranslation} from "react-i18next";
import {getCitiesRequest, getDistrictsRequest} from "../../utills/api";

const OrderInputFormsForKyrgyzstan = ({lang}) => {
    const {t} = useTranslation()

    const [cities, setSities] = useState([])
    const [fromDistricts, setFromDistricts] = useState([])
    const [toDistricts, setToDistricts] = useState([])
    const [village, setVillage] = useState([])

    const [width, setWidth] = useState('')
    const [heigth, setHeigth] = useState('')
    const [length, setLength] = useState('')
    const [sum, setSum] = useState('')

    //sender inputs
    const [senderName, setSenderName] = useState("");
    const [senderPhoneNumber, setSenderPhoneNumber] = useState("");

    //reciever inputs
    const [recieverName, setRecieverName] = useState("");
    const [recieverPhoneNumber, setrecieverPhoneNumber] = useState("");

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

    const setValueHandler = (e) => {

        const value = e.target.value

        switch (e.target.name) {
            case 'heigth':
                setHeigth(value)
                break
            case 'width':
                setWidth(value)
                break
            case 'length':
                setLength(value)
            default:
                return ''
        }
    }
    useEffect(() => {
        width && heigth && length
            ? setSum((width * heigth * length) / 5000 + ' кг/м³')
            : setSum('')
    }, [width, heigth, length])

    useEffect(async () => {
        try {
            const sitiesResponse = await getCitiesRequest()
            setSities(sitiesResponse)
            setToDistricts(sitiesResponse)
        } catch (e) {
            console.log(e)
        }
    }, [])
    const getFromDistrictHandler = async (e) => {
        const district = await getDistrictsRequest(e.target.value)
        setFromDistricts(district)
    }
    const getToDistrictHandler = async (e) => {
        const district = await getDistrictsRequest(e.target.value)
        setVillage(district)
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <div className="order_content_inner">
                    <div className="order_content_inner_item">
                        <div>
                            <h3>{t('form.Отправителя')}</h3>
                            <input
                                className="custom_input"
                                type="text"
                                placeholder={t('form.Имя')}
                                required={true}
                            />
                            <small>*обязательное поле</small>
                            <input
                                className="custom_input"
                                type="number"
                                placeholder={"Телефон"}
                            />
                            <small>*обязательное поле</small>
                        </div>
                        <div>
                            <h3>{t('form.Откуда_Город')}</h3>
                            <div className="select_tag_parent">
                                <select name="" id="" className="custom_input select_tag"
                                        onChange={getFromDistrictHandler}>
                                    {
                                        cities.map(el => <option key={el.id} value={el.id}>
                                            {lang === 'ru' ? el.name_ru : el.name_kg}
                                        </option>)
                                    }
                                </select>
                                <small>*обязательное поле</small>
                            </div>
                            <h3>{t('form.Откуда_Район')}</h3>
                            <div className="select_tag_parent">
                                <select name="" id="" className="custom_input select_tag"
                                        disabled={!fromDistricts.length}>
                                    {
                                        fromDistricts.map(el => <option key={el.id} value={el.id}>
                                            {lang === 'ru' ? el.name_ru : el.name_kg}
                                        </option>)
                                    }
                                </select>
                                <small>*обязательное поле</small>
                                <input
                                    className="custom_input "
                                    type="text"
                                    placeholder={t("Адрес")}
                                />
                                <small>*обязательное поле</small>
                            </div>
                            <div className="long_input">
                                <input
                                    className="custom_input "
                                    type="text"
                                    placeholder={t("form.Дополнительное_описание")}
                                />
                                <small>*обязательное поле</small>
                            </div>
                        </div>
                    </div>

                    <div className="order_content_inner_item">
                        <div>
                            <h3>{t('form.Получателя')}</h3>
                            <input
                                className="custom_input"
                                type="text"
                                placeholder={t("form.Имя")}
                                required={true}
                            />
                            <small>*обязательное поле</small>
                            <input
                                className="custom_input"
                                type="number"
                                placeholder={"Телефон"}
                            />
                            <small>*обязательное поле</small>
                        </div>
                        <div>
                            <h3>{t('form.Куда_Район')}</h3>
                            <div className="select_tag_parent">
                                <select name="" id="" className="custom_input select_tag"
                                        onChange={getToDistrictHandler}>
                                    {
                                        toDistricts.map(el => <option value={el.id} key={el.id}>
                                            {lang === 'ru' ? el.name_ru : el.name_kg}
                                        </option>)
                                    }
                                </select>
                                <small>*обязательное поле</small>

                            </div>
                            <h3>{t('form.Село')}</h3>
                            <div className="select_tag_parent">
                                <select name="" id="" className="custom_input select_tag" disabled={!village.length}>
                                    {
                                        village.map(el => <option value={el.id} key={el.id}>
                                            {lang === 'ru' ? el.name_ru : el.name_kg}
                                        </option>)
                                    }
                                </select>
                                <small>*обязательное поле</small>
                                <input
                                    className="custom_input "
                                    type="text"
                                    placeholder={t("Адрес")}
                                />
                                <small>*обязательное поле</small>
                            </div>
                        </div>
                    </div>
                    <div className="order_content_inner_item">
                        <div>
                            <h3>{t('form.Данные_о_доставке')}</h3>
                            <div className="select_tag_parent">
                                <select name="" id="" className="custom_input select_tag">
                                    <option value="Тип посылки/груза">Тип посылки/груза</option>
                                    <option value="Бишкек">Тип посылки/груза</option>
                                    <option value="Бишкек">Тип посылки/груза</option>
                                    <option value="Бишкек">Тип посылки/груза</option>
                                </select>
                                <small>*обязательное поле</small>
                            </div>
                            <input
                                className="custom_input"
                                type="number"
                                placeholder={t("form.Вес_в_кг")}
                            />
                            <input
                                className="custom_input"
                                type="text"
                                placeholder={t("form.Объемный_вес_(кг/м³)")}
                                value={sum}
                                disabled
                            />
                            <small>*обязательное поле</small>
                        </div>
                        <div>
                            <h3 style={{color: "transparent"}}>d</h3>
                            <input
                                className="custom_input"
                                type="number"
                                placeholder={t("form.Высота_в_см")}
                                name='heigth'
                                required={true}
                                value={heigth}
                                onChange={setValueHandler}
                            />
                            <small>*обязательное поле</small>
                            <input
                                className="custom_input"
                                type="number"
                                placeholder={t("form.Ширина_в_см")}
                                name='width'
                                value={width}
                                onChange={setValueHandler}
                            />
                            <small>*обязательное поле</small>
                            <div>
                                <input
                                    className="custom_input"
                                    type="number"
                                    placeholder={t("form.Длина_в_см")}
                                    name='length'
                                    value={length}
                                    onChange={setValueHandler}
                                />
                                <small>*обязательное поле</small>
                                <div className="long_input_responsive">
                                    <input
                                        className="custom_input "
                                        type="text"
                                        placeholder={t("form.Дополнительное_описание")}
                                    />
                                    <small>*обязательное поле</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order_content_footer">
                    <div className="order_content_footer_info">
                        <p>{t('form.Стоимость_доставки_300_сом')}</p>
                        <p>{t('form.Примерное_время_24_часа')}</p>
                    </div>
                    <div className="order_content_footer_button">
                        <button type={"submit"}>{t('navbar.Оформить_заявку')}</button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};

export default OrderInputFormsForKyrgyzstan;

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
  }

  .order_content_inner_item {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .long_input {
    width: 510px;
    @media (max-width: 1300px) {
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
    background: #FFFFFF;
    //appearance: none;
    -webkit-appearance: none;
  /
    //background-position-x: 244px;
  position: relative;
    transition: all 0.3s ease;

    option {
      //color:red;
      transition: all 0.3s ease;
    }


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
    margin: 0 auto;
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
`
