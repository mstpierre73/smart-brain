import React from 'react';

const FaceRecognition = (props) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={props.image} alt='' width='500px' height='auto'/>
            </div>
        </div>
    );
}

export default FaceRecognition;