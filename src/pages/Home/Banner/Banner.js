import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://i.ibb.co/Fg9CZg6/pexels-asad-photo-maldives-1266831.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-bg">
                            <h1 className="font fs-1">
                                <small className="text-warning">
                                    Thailand </small> last minute
                            </h1>
                            <p className="font-2">
                                It is one of three high-end private hospital in
                                Bangladesh, the other being Apollo tour.
                            </p>
                            
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://i.ibb.co/L8qjpyQ/pexels-quang-nguyen-vinh-2161467.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-bg">
                            <h2 className="font fs-1">
                                Asian{" "}
                                <small className="text-warning">Islands </small>{" "}
                                Tour
                            </h2>
                            <p className="font-2">
                                A fun is a health care institution providing
                                patient treatment with specialized medical and
                                nursing staff and medical equipment.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="https://i.ibb.co/DCmcHV8/pexels-quang-nguyen-vinh-2161449.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-bg">
                            <h2 className="font fs-1">
                                Your Journey
                                <small className="text-warning"> Begins</small>
                            </h2>
                            <p className="font-2">
                                A journey of a 1000 miles starts with a single
                                step.import full demo content with 1 click and
                                create a head-turning website for your travel
                                agency.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;