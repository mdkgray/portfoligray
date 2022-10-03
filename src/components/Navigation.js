import React from 'react';
import { NavList } from "./NavList"
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Navigation() {
    const navList = NavList.map(({ url, name }, index) => {
        return(
            <Button>
                <p key={index}>
                    <NavLink to={url} style={{ textDecoration: 'none' }} activeclassname="active">{name}</NavLink>
                </p>
            </Button>        
        )
    });
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 1,
                },
            }}
            >
            <ButtonGroup variant="text" aria-label="text button group" size="large">
                {navList}
            </ButtonGroup>
        </Box>
    );
}

export default Navigation;