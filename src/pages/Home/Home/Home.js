import React from 'react';
import Banner from '../Banner/Banner';
import ImageDiv from '../ImageDiv/ImageDiv';
import Offers from '../Offers/Offers';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <div className="video">
                <h2 className="black image text-center">
                    25 Best Places to Visit in Europe
                    <br /> <span className="text-dark">Travel Europe</span>
                </h2>
                <p className="text-center text-secondary px-5">
                    Although it is the world’s second smallest continent, Europe
                    welcomes more than half of all the tourists worldwide. In
                    fact, 7 of the 10 most visited countries in the world are
                    European nations.{" "}
                </p>
                <iframe
                    width="100%"
                    height="500px"
                    src="https://www.youtube.com/embed/0GZSfBuhf6Y"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <ImageDiv></ImageDiv>
        </div>
    );
};

export default Home;