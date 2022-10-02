import React from 'react'
import Navigation from './Navigation';


function Header() {

    return (
    <div className='header center'>
        <img src={'/assets/images/ZORB.png'} className='' alt='zorb'></img>
        <Navigation />
    </div>
    )
}

export default Header