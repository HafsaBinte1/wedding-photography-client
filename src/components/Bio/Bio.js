import React from 'react';
import Button from 'react-bootstrap/Button';
import bioImage from '../../image/bio/photo-1529519195486-16945f0fb37f.jpg'
import './Bio.css'

const Bio = () => {
    return (
        <div className='container p-5'>
            <div className='row row-cols-lg-2 row-cols-md-2 row-cols-1 d-flex align-items-center justify-content-center'>
                <div className='bio-details'>
                    <h1 className='fw-bold'>Photography is  an
                    <span className='title-name'> Art</span> </h1>
                    <p>The word Photography literally means 'drawing with light', which derives from the Greek photo, meaning light and graph, meaning to draw. Photography is the process of recording an image – a photograph – on lightsensitive film or, in the case of digital photography, via a digital electronic or magnetic memory.</p>
                    <Button className='bio-btn' size="lg">
                        Learn more
                    </Button>
                </div>
                <div>
                    <img className='bio' src={bioImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Bio;
