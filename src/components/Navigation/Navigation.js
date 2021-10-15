import React from 'react';
import './Navigation.css';


const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}  className='dim black underline pa3'>
                 <p onClick={() => onRouteChange('signout')} className='f3 link black underline pointer'> Sign Out</p>    
            </nav>  
        )
    }else{
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}  className='dim black underline pa3'>
                 <p onClick={() => onRouteChange('signin')} className='f3 link underline pointer'> Signin </p>    
                 <p onClick={() => onRouteChange('register')} className='f3 link underline pointer'> Register </p>    
            </nav>
        )
    }
        }
  
        
         

export default Navigation;