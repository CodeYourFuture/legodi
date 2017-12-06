import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-continer">
                <span className='img'>
                    <img src="/icons/logo_footer.png" />
                </span>
                <h5> <strong>{'{Legodi}'}</strong><span className="footer-text">Glasglow Welcome Pack</span> </h5>
            </div>
            <div className="footer-icon">
                <img src="/icons/menu-glasgow.png" />
            </div>
        </div>)
}

export default Footer           