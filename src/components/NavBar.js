import React, { useState } from "react"

import { Navbar, Nav, Button, Modal } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import SUTDLogo from '../assets/SUTDLogo.png'
import SMULogo from '../assets/SMULogo.png'


function Booklet() {

    const [show, setShow] = useState(false);
    const closeBooklet = () => setShow(false)
    const showBooklet = () => setShow(true)

    return (
        <div>
            <Button variant="outline-secondary" onClick={showBooklet}>Programme Booklet</Button>

            <Modal size='lg' show={show} onHide={closeBooklet} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Programme Booklet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <embed src="https://drive.google.com/file/d/1WlmkMl2ktVCelcnjSSSl6PsOKRJqxWjN/preview?usp=sharing" frameborder="0" width="100%" height="1000px" />
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default function NavBar() {
    const history = useHistory()

    function showGallery() {
        history.push('/gallery')
    }

    return (
        <div>
            {/* Navigation Bar */}
            <Navbar bg="dark" variant="dark">

                {/* Logo */}
                <Navbar.Brand href='/stream'>
                    <img
                        src={SUTDLogo}
                        width="120px"
                        height="50px"
                        className="d-inline-block align-top"
                        alt="SUTD Logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href='/stream'>
                    <img
                        src={SMULogo}
                        width="120px"
                        height="50px"
                        className="d-inline-block align-top"
                        alt="SUTD Logo"
                    />
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-sm-2">
                        {/* Gallery */}
                        <Button variant="outline-secondary" onClick={showGallery}>Gallery</Button>
                        <p style={{ opacity: "0" }}>xx</p>

                        {/* Programme Booklet */}
                        <Booklet/>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}