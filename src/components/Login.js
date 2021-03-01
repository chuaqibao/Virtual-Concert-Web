import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import firebase from 'firebase'


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()

    { /* Log In */ }
    setError("")
    setLoading(true)

    // find if snapshot exists
    const ref = firebase.database().ref(passwordRef.current.value)
    ref.once("value", snapshot => {
        if (!snapshot.exists()){
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
            firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(success => {
                login(passwordRef.current.value)
            }).catch(function(error) {
                // An error happened.
                setError("Incorrect email or password")
              });
        }
        else { setError("User is logged in")}
    })
    setLoading(false)
  }

  return (
    <>
        <div className="w-100" style={{ maxWidth: "400px" }}>
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
                    Don't have an account yet? <a href="https://forms.gle/AvQUVvecYN7BfUAKA">Sign Up</a>
                </div>
                </Card.Body>
            </Card> 
        </div>     
    </>
  )
}