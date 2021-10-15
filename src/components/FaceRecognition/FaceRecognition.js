import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return(
        <div className='center pa4'>
           <div className="absolute mt4">
        {/*the tachyon classes are to make the image take a paticular shape no matter the default size of the image */}
              <img id="inputImage" src ={ imageUrl } alt='Detect' width='500' height='auto'/>
              <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
          </div>
        </div> 
    )
}
 

 


export default FaceRecognition;