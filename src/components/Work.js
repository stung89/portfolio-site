import React from 'react';
import Slider from 'react-slick';

const WorkPage = () => (
    <div className="container transition-item detail-page">
    <h1>My Work</h1>
    <div className="container__work">
        <ul className="works">
            <SimpleSlider />
        </ul>
    </div>
    </div>
)

export default WorkPage;