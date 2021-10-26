import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit}) => {
    return(
        <div>
            <p className='center black'> {'This Magic Brain Will Detact Faces In Your Pictures'} </p>
            <div className='center'>
               <div className='center br3 pa4 shadow-2 w-30'>
                  <input onChange={ onInputChange } className='f4 pa2 w-70 center' type='text' placeholder='Urls'/>
                  <button onClick={ onPictureSubmit } className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
               </div>
            </div>
        </div>
    )
}
 

 


export default ImageLinkForm;