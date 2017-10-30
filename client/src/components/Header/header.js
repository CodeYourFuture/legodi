import React from 'react';   
import "./headerCss/header.css"

function Header(props) {
 
        return (
            <header>
                    <h3>{props.headerTitle}</h3>
                    <p>{props.headerDesc}</p>
             </header>
            )
 
}

export default Header