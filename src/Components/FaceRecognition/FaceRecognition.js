import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({image, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id= 'input-image' src={image} alt='' width='500px' height='auto'/>
                <div className='boundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;