import React from 'react'
import styled from "styled-components"
import Navbar from "../Navbar";
import Home from "../Home/Home";
import Services from "../Services/Services";
import GeographicDirection from "../GeographicDirection/GeographicDirection";
import TrackPackages from "../TrackPackage/TrackPackage";
import AboutNomad from "../AboutNomad/AboutNomad";
import Partners from "../Partners/Partners";
import PriceAdvantage from "../PriceAdvantage/PriceAdvantage";
import {COLOR} from "../../constants";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import FixedButton from "../FixedButtonForCalling/FixedButtonForCalling";


const WholeContent = () => {
    return (
        <Wrapper>
            <Navbar/>
            <Home/>
            <Services/>
            <GeographicDirection/>
            <TrackPackages/>
            <AboutNomad/>
            <Partners/>
            <PriceAdvantage/>
            <ContactUs/>
            <Footer/>
            <FixedButton>Позвонить</FixedButton>
        </Wrapper>
    )
}

export default WholeContent

const Wrapper = styled.div`
    position: relative;
`
