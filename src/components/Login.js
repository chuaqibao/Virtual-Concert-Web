import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, CardGroup } from "react-bootstrap"

import { useAuth } from "../contexts/AuthContext"

import firebase from 'firebase/app'
import 'firebase/database'


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        /* Log In */ 
        setError("")
        setLoading(true)

        const emailParse = emailRef.current.value.replaceAll(".", "")
        
        // find if snapshot exists
        const ref = firebase.database().ref(emailParse)
        ref.once("value", snapshot => {
            if (!snapshot.exists()) {
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
                firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
                    .then(success => {
                        login(emailParse)
                    }).catch(function (error) {
                        // An error happened.
                        console.log(error)
                        setError("Incorrect email or password")
                    });
            }
            else { setError("User is logged in") }
        })
        setLoading(false)
    }

    return (
        <>
            <div className="w-100" style={{ maxWidth: "800px" }}>
                <CardGroup>

                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Log In</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} variant="dark" className="w-100" type="submit">
                                    Log In
                                </Button>
                            </Form>
                            <br></br>
                            <div className="w-100 text-center mt-2">
                                Don't have a ticket yet? <a href="http://tinyurl.com/almamaterform">Grab your ticket now!</a>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <div className="w-100 text-left mt-2">
                                Note: Your credentials will only be valid for 4 hours from the point of login starting from <b>7 May 2021, 7pm</b>. <br></br> <br></br>
                                
                                To test the validity of your credentials, you may login before 7 May 12pm and contact us if you face any troubles. <br></br> <br></br>
                                
                                Any logins before 7 May will <b> not </b> count as the one-time login. This is solely to test the validity of your credentials.
                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}