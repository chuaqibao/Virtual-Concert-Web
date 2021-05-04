import React, { Component } from 'react'

import { Card, Container } from "react-bootstrap"


import Img1 from '../assets/1.jpg'
import Img2 from '../assets/2.jpg'
import Img3 from '../assets/3.jpg'
import Img4 from '../assets/4.jpg'
import Img5 from '../assets/5.jpg'
import Img6 from '../assets/6.jpg'
import Img7 from '../assets/7.jpg'
import Img8 from '../assets/8.jpg'
import Img9 from '../assets/9.jpg'
import Img10 from '../assets/10.jpg'
import Img11 from '../assets/11.jpg'
import Img12 from '../assets/12.jpg'


class Gallery extends Component {

    cards = [
        {
            image: Img1,
        },
        {
            image: Img2,
        },
        {
            image: Img3,
        },
        {
            image: Img4,
        },
        {
            image: Img5,
        },
        {
            image: Img6,
        },
        {
            image: Img7,
        },
        {
            image: Img8,
        },
        {
            image: Img9,
        },
        {
            image: Img10,
        },
        {
            image: Img11,
        },
        {
            image: Img12,
        }
    ]

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <h1 className="text-center mb-4" style={{ color: "white" }}>The Gallery</h1>
                <br></br>
                <br></br>

                <div >
                    <Container className="d-flex justify-content-around flex-wrap">
                        {this.cards.map(card => (
                            <div>
                            <Card text="black" className=" text-center p-2" style={{ width: '18rem' }}>
                                <Card.Img src={card.image} />
                            </Card>
                            <br></br>
                            <br></br>
                            </div>
                        ))}
                    </Container>
                </div>
            </div>
        )
    }
}

export default Gallery;