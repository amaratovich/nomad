import React from 'react'
import styled from "styled-components"
import {useTranslation} from "react-i18next";


const ResponsiveHeader = () => {
	const {t} = useTranslation()
	return (
		<Wrapper>

			<ul>
				<li>
					<a href="#aboutus" className="links">{t('navbar.О_нас')}</a>
				</li>
				<li>
					<a href="#services" className="links">{t('navbar.Услуги')}</a>
				</li>
				<li>
					<a href="#" className="links">{t('navbar.Оформить_заявку')}</a>
				</li>
				<li>
					<a href="#tracking" className="links">{t('navbar.Отследить_посылку')}</a>
				</li>
				<li>
					<a href="#contacts" className="links">{t('navbar.Контакты')}</a>
				</li>
			</ul>

		</Wrapper>
	)
}

export default ResponsiveHeader

const Wrapper = styled.div`
	padding: 30px 0;
	@media(max-width: 500px) {
		padding: 0;
	}

	ul {
		display: flex;
		flex-direction: column;
		@media (max-width: 500px) {
			align-items: flex-start;
			
		}

		li {
			a {
				font-size: 20px;
				line-height: 28px;
				color: #ffffff;
				@media (max-width: 500px) {
					//font-size: 17px;
				}
			}
		}
	}
`
