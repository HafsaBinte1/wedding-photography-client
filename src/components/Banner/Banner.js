import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner'>
            <div className=''>
                <Carousel>
                  
                    <Carousel.Item>
                        <div className='banner-img-2 banner-size d-flex align-items-center justify-content-center'>
                           

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='banner-img-3 banner-size d-flex align-items-center justify-content-center'>


                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
};

export default Banner;

