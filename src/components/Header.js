import React from 'react'
import Navigation from './Navigation';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


function Header() {
    return (    
        <Box sx={{ flexGrow: 1, height: 100 }}>
            <AppBar                
                container
                display="flex" 
                justifycontent="center"
                columns={{ xs: 1, sm: 8, md: 12 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img
                            alt="zorb"
                            src={process.env.PUBLIC_URL + "/assets/images/ZORB.png"}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </IconButton>

                    <Typography 
                        variant="h4" 
                        component="div" 
                        sx={{ flexGrow: 1, alignItems: 'center' }}
                        >
                        Mackenzie Gray
                    </Typography>

                    <Navigation />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header