import React, { Component } from 'react'

import { Card, Container } from "react-bootstrap"

import Img1 from '../assets/1.jpg'
import Img3 from '../assets/3.jpg'
import Img5 from '../assets/5.jpg'
import Img7 from '../assets/7.jpg'
import Img9 from '../assets/9.jpg'
import Img10 from '../assets/10.jpg'
import Img11 from '../assets/11.jpg'
import Img12 from '../assets/12.jpg'
import Img13 from '../assets/13.jpg'
import Img14 from '../assets/14.jpg'
import Img15 from '../assets/15.jpg'
import Img16 from '../assets/16.jpg'
import Img17 from '../assets/17.jpg'
import Img18 from '../assets/18.jpg'
import Img19 from '../assets/19.jpg'

class Gallery extends Component {

    cards = [
        {
            image: Img1,
            text: "Title"
        },
        {
            image: Img5,
            text: "Title"
        },
        {
            image: Img3,
            text: "Title"
        },
        {
            image: Img9,
            text: "Title"
        },
        {
            image: Img10,
            text: "Title"
        },
        {
            image: Img11,
            text: "Title"
        },
        {
            image: Img7,
            text: "Title"
        },
        {
            image: Img12,
            text: "Title"
        },
        {
            image: Img13,
            text: "Title"
        },
        {
            image: Img14,
            text: "Title"
        },
        {
            image: Img15,
            text: "Title"
        },
        {
            image: Img16,
            text: "Title"
        },
        {
            image: Img17,
            text: "Title"
        },
        {
            image: Img18,
            text: "Title"
        },
        {
            image: Img19,
            text: "Title"
        },
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
                                <Card.Body>
                                    <Card.Title>{card.text}</Card.Title>
                                </Card.Body>
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