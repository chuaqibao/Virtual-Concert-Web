import React, { useState } from 'react'
import ReactPlayer from 'react-player/'

import { useAuth } from "../contexts/AuthContext"

import { Button, Alert } from "react-bootstrap"

function AlertDismissible() {
    const { checkUser } = useAuth()
    const email = checkUser()
    var alertMsg = 'Your account will expire in 4 hours and you will be automatically logged out.'

    if (((email === 'stl03@sph.com.sg') || (email === 'pvotcy@nus.edu.sg') || (email === 'trevsze@gmail.com'))) {
        alertMsg = 'You have unlimited access to our concert video.'
    } else if (email === 'sutdsmu.almamater@gmail.com') {
        alertMsg = 'This account will expire at 9pm.'
    }

    const [show, setShow] = useState(true);

    return (
      <>
        <Alert show={show} variant="warning">
          <Alert.Heading>Important Guideline</Alert.Heading>
          <p>
            {alertMsg} Kindly contact us at <i>sutdsmu.almamater@gmail.com</i> if you face any troubles!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-warning">
              Close
            </Button>
          </div>
        </Alert>
  
        <div className="d-flex justify-content-center">

        {!show && <Button variant="outline-warning" onClick={() => setShow(true)}>Guideline</Button>}
        </div>

      </>
    );
  }
  

export default function Stream() {

    return (
        <div>
            <br/>
            <AlertDismissible/>

            <br/>
            <h1 className="text-center mb-4" style={{ color: "white" }}>Alma Mater Virtual Concert</h1>

            <br/>            
            <ReactPlayer
            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
            style={{ borderColor: "white", borderStyle: 'solid', borderWidth:'2px', borderRadius:'2px'}}
                url= 'https://firebasestorage.googleapis.com/v0/b/concert-web.appspot.com/o/final-video.mp4?alt=media&token=73f33167-6861-4098-a20d-b350055fb415'
                width='100%'
                height='100%'
                controls
            />  
        </div>          
    )
    
}