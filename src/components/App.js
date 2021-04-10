import React from "react"

import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from './Login'
import Stream from './Stream'
import Gallery from './Gallery'
import HomePage from './HomePage'

import NavBar from './NavBar'
import Counter from './Countdown.js'
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from '../contexts/AuthContext'

import BackgroundImage from '../assets/thumbnailx.jpeg'

function Routers() {
  return (
    <AuthProvider>
      <Switch>
        {/* <PrivateRoute path='/stream' component={Stream} />
        <Route path='/gallery' component={Gallery} />
        <Route exact path='/' component={Login} /> */}

      </Switch>
    </AuthProvider>
  )
}

function Body() {
  let background = { backgroundImage: `url(${BackgroundImage})` }

  return (
    <div style={background}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90vh" }}>
          <HomePage />
        <Routers />
      </Container>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Body />
      </Router>
    </AuthProvider>
  )
}