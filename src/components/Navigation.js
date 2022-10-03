import React from 'react';
import { NavList } from "./NavList"
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Navigation() {
    const navList = NavList.map(({ url, name }, index) => {
        return(
        <li key={index}>
            <NavLink to={url} style={{ textDecoration: 'none' }} activeclassname="active">{name}</NavLink>
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
        
        
        // <Box
        //     sx={{
        //         display: 'flex',
        //         flexDirection: 'column',
        //         alignItems: 'center',
        //         '& > *': {
        //         m: 1,
        //         },
        //     }}
        //     >
        //     <ButtonGroup variant="text" aria-label="text button group">
        //         <Button>One</Button>
        //         <Button>Two</Button>
        //         <Button>Three</Button>
        //     </ButtonGroup>
        // </Box>
    );
}

export default Navigation;