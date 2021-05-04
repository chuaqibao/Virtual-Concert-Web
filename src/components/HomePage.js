import React, { useEffect } from 'react';
import Countdown from './Countdown.js';
import Grid from '@material-ui/core/Grid';
import "./Homepage.css";


function HomePage(){ 

    useEffect(() => {
        let title = window.location.pathname
        document.title = "Alma Mater Concert";
      });

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} justify="center">
                    
                    <div className="headerAlignment">
                        <h1 className='comingSoonHeader' >Coming soon!</h1>
                    </div>

                    {/* <div className="headerAlignment">
                        <h3 className="subHeader">The exciting journey of orchestral instrumental play blended with the soft touch of visual drama awaits you.</h3>
                    </div> */}

                </Grid>

                <Grid item xs={12}>
                    <Countdown/>
                </Grid>

            </Grid>
        </div>
    )

}

export default HomePage; 