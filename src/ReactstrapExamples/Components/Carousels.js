import React from 'react'
import { Carousel } from 'react-bootstrap'
import Fullstack from '../Assets/fulls.jpg'
import FullStack from '../Assets/fullstack.png'
import Mern from '../Assets/mern1.png'

const Carousels = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img src={Fullstack} alt="First Slide" className='d-block w-100' />
                    <Carousel.Caption>
                        <h3>Full Stack Web Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={FullStack} alt="Second Slide" className='d-block w-100' />
                    <Carousel.Caption>
                        <h3>Full Stack Web Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Mern} alt="Third Slide" className='d-block w-100' />
                    <Carousel.Caption>
                        <h3>Full Stack Web Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousels
