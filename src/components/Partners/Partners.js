import React from 'react'
import styled from "styled-components"
import SectionTitles from "../SectionTitles";
import Zoom from "../../assets/zoom.png"
import Next from "../../assets/right-arrow.png"
import Prev from "../../assets/left-arrow.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {imageData} from "./PartnersImageData";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: {max: 4000, min: 3000},
		items: 5
	},
	desktop: {
		breakpoint: {max: 3000, min: 1024},
		items: 4
	},
	tablet: {
		breakpoint: {max: 1024, min: 464},
		items: 3
	},
	mobile: {
		breakpoint: {max: 464, min: 0},
		items: 1
	}
};

const Partners = () => {
	return (
		<Wrapper>
			<div className="container">
				<SectionTitles right={false}>С нами сотрудничают:</SectionTitles>
				<div className="partners_content">
					<Carousel
						swipeable={true}
						draggable={true}
						showDots={["tablet", "mobile"]}
						responsive={responsive}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						// arrows={false}
						autoPlay={true}
						autoPlaySpeed={1000}
						keyBoardControl={true}
						customTransition="all .5"
						transitionDuration={1000}
						containerClass="carousel-container"
						// removeArrowOnDeviceType={["tablet", "mobile"]}
						// deviceType={this.props.deviceType}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						{
							imageData.map((item) => {
								return <div className="partners_item" key={item.id}>
									<img src={item.image} alt=""/>
								</div>
							})
						}

					</Carousel>
					{/*<div className="partners_items">*/}
					{/*    <div className="partners_item">*/}
					{/*        <img src={Zoom} alt=""/>*/}
					{/*    </div>*/}
					{/*    <div className="partners_item">*/}
					{/*        <img src={Zoom} alt=""/>*/}
					{/*    </div>*/}
					{/*    <div className="partners_item">*/}
					{/*        <img src={Zoom} alt=""/>*/}
					{/*    </div>*/}
					{/*    <div className="partners_item">*/}
					{/*        <img src={Zoom} alt=""/>*/}
					{/*    </div>*/}
					{/*</div>*/}
					{/*<div className="controllers">*/}
					{/*    <div className="controllers_item">*/}
					{/*        <img src={Prev} alt=""/>*/}
					{/*    </div>*/}
					{/*    <div className="controllers_item">*/}
					{/*        <img src={Next} alt=""/>*/}
					{/*    </div>*/}
					{/*</div>*/}
				</div>
			</div>
		</Wrapper>
	)
}

export default Partners

const Wrapper = styled.div`

  .partners_content {
    padding: 20px 0 50px;
    @media (max-width: 500px) {
      padding: 30px 0 40px;
    }

    .partners_items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 80px;
      @media (max-width: 500px) {
        margin: 0 auto;
        grid-gap: 30px;
      }

  
    }
  }
  .partners_item {
    //height: 200px;
margin-right: 30px;
    @media (max-width: 500px) {
      margin: 0 auto;
    }

    img {
      width: 100%;
      height: 100%;
      //height: 300px;
      @media (max-width: 760px) {
        //width: 80%;
        margin: 0 auto;
        //height: 300px;
      }
    }
  }
  .controllers {
    display: flex;
    text-align: center;
    margin: 0 auto;
    justify-content: center;

    .controllers_item {
      margin-left: 10px;
      margin-top: 60px;
    }
  }
  .react-multi-carousel-track{
    text-align: center;
    display: flex;
    align-items: center;
    min-height: 300px;
  }
  .react-multiple-carousel__arrow{
    bottom: 10%;
  }
  .react-multiple-carousel__arrow--left{
    left: 30%;
  }
  .react-multiple-carousel__arrow--right{
    right: 30%;
  }
`
