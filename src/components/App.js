import React, {useState} from "react"

import { Container, Navbar, Nav, Button, Modal } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "./Login"
import Stream from './Stream'
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from "../contexts/AuthContext"

import SUTDLogo from '../assets/SUTDLogo.png'
import SMULogo from '../assets/SMULogo.png'

import BackgroundImage from '../assets/thumbnailx.jpeg'
import file from "../assets/ProgrammeBooklet.pdf"

export default function App() {
  let background = { backgroundImage: `url(${BackgroundImage})`}

  const [show, setShow] = useState(false);
  const closeBooklet = () => setShow(false)
  const showBooklet = () => setShow(true)

  return (
      <AuthProvider>

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

          {/* Programme Booklet */} 

          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-sm-2">
              <Button variant="outline-secondary" onClick={showBooklet}>Programme Booklet</Button>

              <Modal size='lg' show={show} onHide={closeBooklet} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Programme Booklet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <embed src="https://drive.google.com/file/d/1WlmkMl2ktVCelcnjSSSl6PsOKRJqxWjN/preview?usp=sharing" frameborder="0" width="100%" height="1000px"/>
                </Modal.Body>
              </Modal>

            </Nav>
          </Navbar.Collapse>
        </Navbar>


        {/* Pages Router */}

      <div style={background}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90vh" }}
      >
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute path='/stream' component={Stream} />
                <Route exact path='/' component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
      </Container>
      </div>
    </AuthProvider>  
  )
}