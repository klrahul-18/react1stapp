import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';


function Banner() {
    return (
        <>
            <div className="banner position-relative">
                <video width="100%" autoPlay loop muted className='Position-relative'>
                    <source src='1.mp4' type=
                        "video/mp4" />
                </video>

                <div className=" text-center text-white position-absolute  start-0 w-100" style={{top:"25%"}}>
                    <img src="logo192.png" alt="logo" width={120} className='logorotate' />
                    <h1>React Js Developer</h1>
                    <h2>Master in React Js</h2>
                    <Button variant="info" className='me-3 text-white'>Learn React Js</Button>
                    <Button variant="secondary">Learn Javascript</Button>
                </div>
            </div>
        </>
    )
}
export default Banner;