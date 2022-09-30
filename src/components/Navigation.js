import React from 'react';
import { NavList } from "./NavList"
import { NavLink } from "react-router-dom";


function Navigation() {
    const navList = NavList.map(({ url, name }, index) => {
        return(
        <li key={index}>
            <NavLink to={url} className='nav-list nav-font flex-row mx-2 no-underline' activeclassname="active">{name}</NavLink>
        </li>
        )
    });
    
    return (
        <header className="top-header">
            <h1 className='logo flex-row-all'>
                <a className='logo no-underline' href="/About">MG</a>
            </h1>
            <nav className='nav-list'>
                <ul className="nav-list flex-row mx-2 no-underline">{navList}</ul>
            </nav>
        </header>
    );
}


export default Navigation;