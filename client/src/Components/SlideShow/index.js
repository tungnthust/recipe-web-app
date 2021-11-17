import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';   
import Carousel from 'react-bootstrap/Carousel';  
import img1 from './Image/slide_5.jpg';
import img2 from './Image/slide_6.jpg';
import img3 from './Image/slide_7.jpg';
import './index.css';

const SlideShow = () => {
	const fadeImages = [
	  img1,
	  img2,
	  img3
	];
	return (
		<div className="container">  
			<Carousel interval="2000">  
				<Carousel.Item >  
					<img className="d-block w-100"  src={fadeImages[0]}  alt="First Slide"/>  
				</Carousel.Item  >  
				<Carousel.Item >  
					<img className="d-block w-100"  src={fadeImages[1]}  alt="Second slide" />   
				</Carousel.Item>  
				<Carousel.Item >  
					<img  className="d-block w-100"  src={fadeImages[2]}   alt="Third slide" />  
				</Carousel.Item>  
			</Carousel>  
		</div>  
	)
}

export default SlideShow;