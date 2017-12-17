import React from 'react';
import './about.css'

function About() {

    return (
        <div>
          <p class="about-text">This application was developed by CodeYourFuture students
               - Glasgow Cohort 1 - in collaboration with Refuweegee.</p>

        <div className="about-page">
            <div className="refuweege-logo">
                <img src="refuweegee.png" />
            </div>
            <div className="cyf-logo">
                <img src="codeyourfuture.png" />
            </div> 
        </div>
        </div>)

}

export default About