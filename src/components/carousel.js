import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Slide from "../components/slide"
import img1 from "../images/sld2.png"
import img2 from "../images/sld2.png"
import img3 from "../images/sld2.png"
import img4 from "../images/sld2.png"

const Slider = () => {
    const content1 = " #1 Top Software development company in Nigeria."
    return (

        <div className="slider index-3">
            <OwlCarousel className="owl-main  owl-theme" items={1} loop autoplay>
                <Slide img={img1} title="Think Big Do Creative Grow Business " content={content1} loop/>
                <Slide img={img2} title="Think Big Do Creative Grow Business " content={content1} loop/>
                <Slide img={img3} title="Think Big Do Creative Grow Business " content={content1}/>
                <Slide img={img4} title="Think Big Do Creative Grow Business " content={content1}/>
            </OwlCarousel>
        </div>
    );
}

export default Slider
