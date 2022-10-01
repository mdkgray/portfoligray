import React from 'react'
import Navigation from './Navigation';


function Header() {

    return (
    <div className='header center'>
        <img src={'/assets/images/ZORB.png'}></img>
        <Navigation />
    </div>
    )
}

export default Header