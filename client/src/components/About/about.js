import React from 'react';
import './about.css'

function About() {

    return (
        <div>
          <p className="about-text">This application was developed by CodeYourFuture students
               - Glasgow Cohort 1 - in collaboration with Refuweegee.</p>

        <div className="about-page">
            <div className="refuweege-logo">
                    <img src="refuweegee.png" alt="refuweegee" />
            </div>
            <div className="cyf-logo">
                    <img src="codeyourfuture.png" alt="codeyourfuture" />
            </div> 
        </div>
        </div>)

}

export default About