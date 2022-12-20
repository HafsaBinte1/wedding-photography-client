import React from 'react';
import { Button } from 'react-bootstrap';
import img1 from '../../image/photography/22960-wedding-party-20-mile-house-peyton-rainey-photography.jpeg';
import img2 from '../../image/photography/sq-8d0e25d56ef94baba58ba5f8423872ff.jpg'

const Provide = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center fw-bold'>Our PhotoGraphy</h1>
            <div className='p-5'>
                <div className="card mb-3 p-4">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title fw-bold title-name">Marriage</h2>
                                <p className="card-text fw-bold">Author: Mashid </p>
                                <p>Couple Goals</p>
                                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                                <Button className='bio-btn' size="lg">
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 p-4">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img2} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title title-name fw-bold">Wedding</h2>
                                <p className="card-text fw-bold">Author: Jasshed </p>
                                <p>Group of coupls</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <Button className='bio-btn' size="lg">
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provide;

