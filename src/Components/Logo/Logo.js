import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import brain from './brain.jpg';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 175, width: 175 }} >
                <div className="Tilt-inner pa0 ma0">
                    <img className='brain' alt='brain logo' src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;