import React, {useState} from 'react'
import styled from "styled-components"
import Navbar from "../Navbar";
import Home from "../Home/Home";
import Services from "../Services/Services";
import GeographicDirection from "../GeographicDirection/GeographicDirection";
import TrackPackages from "../TrackPackage/TrackPackage";
import AboutNomad from "../AboutNomad/AboutNomad";
import Partners from "../Partners/Partners";
import PriceAdvantage from "../PriceAdvantage/PriceAdvantage";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import FixedButton from "../FixedButtonForCalling/FixedButtonForCalling";
import {useTranslation} from "react-i18next";


const WholeContent = () => {
    const {t} = useTranslation()
    const [langLogo, setLangLogo] = useState(localStorage.getItem('lang') || 'ru')

    return (
        <Wrapper>
            <Navbar langLogo={langLogo} setLangLogo={setLangLogo}/>
            <Home lang={langLogo}/>
            <Services/>
            <GeographicDirection/>
            <TrackPackages/>
            <AboutNomad/>
            <Partners/>
            <PriceAdvantage/>
            <ContactUs/>
            <Footer/>
            <div className = "phone">
                <FixedButton>{t('contactUs.Позвонить')}</FixedButton>
            </div>
        </Wrapper>
    )
}

export default WholeContent

const Wrapper = styled.div`
    position: relative;
    .phone{
        position: fixed;
        z-index: 999;
        display: flex;
        align-items: center;
        bottom: 10%;
        right: 5%;
    }
`
