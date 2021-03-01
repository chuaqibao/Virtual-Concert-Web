import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Video from '../assets/demo-video.mp4'

class Stream extends Component {
    render () {
        return (
            <div>
                <br></br>
                <h1 className="text-center mb-4" style={{ color: "white" }}>Alma Mater Virtual Concert</h1>
                <br></br>
                <ReactPlayer
                style={{ borderColor: "white", borderStyle: 'solid', borderWidth:'2px', borderRadius:'2px'}}
                    url= {Video}
                    width='100%'
                    height='100%'
                    controls
                />  
            </div>          
        )
    }
}

export default Stream;