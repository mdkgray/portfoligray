import React from 'react';
import { NavList } from "./NavList"
import { NavLink, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Navigation() {
    let currentTab = useLocation().pathname;

    const navList = NavList.map(({ url, name }, index) => {
        return(
            <Button>
                <p key={index}>
                    <NavLink to={url} style={{ textDecoration: 'none' }} activeclassname="active" className={currentTab === url ? "currentPage" : 'none'}>{name}</NavLink>
                </p>
            </Button>        
        )
    });

    console.log(useLocation().pathname);
    
    
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
            display="flex" 
                justifyContent="center"
                columns={{ xs: 1, sm: 6, md: 8, lg:10 }} 
            >
            <ButtonGroup variant="text" aria-label="text button group" size="large">
                {navList}
            </ButtonGroup>
        </Box>
    );
}

export default Navigation;