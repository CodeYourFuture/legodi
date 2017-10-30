import React from 'react';   

function Header(props) {
 
        return (
            <header>
                    <h3>{props.headerTitle}</h3>
                    <p>{props.headerDesc}</p>
             </header>
            )
 
}

export default Header