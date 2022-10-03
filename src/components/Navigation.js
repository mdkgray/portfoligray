import React from 'react';
import { NavList } from "./NavList"
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navigation() {
    const navList = NavList.map(({ url, name }, index) => {
        return(
        <li key={index}>
            <NavLink to={url} style={{ textDecoration: 'none' }} className='nav-list nav-font flex-row mx-2 no-underline' activeclassname="active">{name}</NavLink>
        </li>
        )
    });
    
    return (
        <div>
            <header className="top-header">
                <nav className='nav-list'>
                    <Stack spacing={2} direction="row">
                        <Button variant="text">{navList}</Button>
                    </Stack>                    
                </nav>
            </header>            
        </div>        
    );
}

export default Navigation;