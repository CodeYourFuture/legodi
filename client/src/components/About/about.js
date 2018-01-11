import React from 'react';
import './about.css'

function About() {

    return (
        <div className="container">
                <p className="about-text">
                   This application was developed by CodeYourFuture students - 
                   Glasgow Cohort 1 - in collaboration with Refuweegee.
               </p>
                <p className="about-text">
                            CodeYourFuture is an organisation that teaches programming to refugees and asylum seekers in the UK.
               </p>
                <p className="about-text">
                            We named the app <strong>Legodi</strong> after our friend Simon Basegi <strong>Legodi</strong>, who has been detained by the Home Office for more than 4 months now.
               </p>     

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