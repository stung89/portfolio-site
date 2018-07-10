import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="work">
                    <h3>1</h3>
                </div>
                <div className="work">
                    <h3>2</h3>
                </div>
                <div className="work">
                    <h3>3</h3>
                </div>
                <div className="work">
                    <h3>4</h3>
                </div>
                <div className="work">
                    <h35</h3>
                </div>
                <div className="work">
                    <h36</h3>
                </div>
            </Slider>
        );
    }
}

export default SimpleSlider;