import React from 'react';
;

const Rank = ({name, entries}) => {
    return(
        <div>
          <div className='f2 black pa4'>
              {`${name} your current entries is... `}
          </div>
          <div className='f2 black'> {entries} </div>
        </div>
    )
}
 

  


export default Rank;