import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className='ImageLinkForm'>
            <p className='f3'>{'This Magic Brain will detect faces in your pictures. Give it a try.'}</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='input f4 pa2 w-70 center br2' type='text'/>
                    <button className='button br2 w-30 grow f4 link ph3 pv2 dib white'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;