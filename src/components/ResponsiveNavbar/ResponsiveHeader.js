import React from 'react'
import styled from "styled-components"


const ResponsiveHeader = () => {
	return (
		<Wrapper>

			<ul>
				<li>
					<a href="#aboutus" className="links">О нас</a>
				</li>
				<li>
					<a href="#services" className="links">Услуги</a>
				</li>
				<li>
					<a href="#" className="links">Оформить заявку</a>
				</li>
				<li>
					<a href="#tracking" className="links">Отследить посылку</a>
				</li>
				<li>
					<a href="#contacts" className="links">Контакты</a>
				</li>
			</ul>

		</Wrapper>
	)
}

export default ResponsiveHeader

const Wrapper = styled.div`
  padding: 30px 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
      align-items: flex-start;
    }
    li {
      a {
        font-size: 20px;
        line-height: 28px;
        color: #22343D;
        @media (max-width: 500px) {
          //font-size: 17px;
        }
      }
    }
  }
`
