import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-continer">
                <span className='img'>
                    <img src="/icons/logo_footer.png" alt="logo_footer" />
                </span>
                <h5> <strong>{'{Legodi} '}</strong><span className="footer-text">Glasgow Welcome Pack</span> </h5>
            </div>
            <Link to="/"><div className="footer-icon">
                <img src="/icons/menu-glasgow.png" alt="menu-glasgow" />
            </div></Link>
        </div>)
}

export default Footer           