import React from 'react'
import Navigation from './Navigation';
import { header } from '../../src/content'


function Header() {
    const { homepage, title } = header

    return (
    <div className='header center'>
        <h2>Mackenzie Gray</h2>
        <Navigation />
    </div>
    )
}

export default Header