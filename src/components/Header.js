import React from 'react'
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
                    <div className='d-flex flex-wrap p-2 col justify-content-center'>
                        <div>
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
                                <h4 className="mx-3">Mackenzie Gray</h4>
                            </IconButton>
                        </div>
                        <div>
                            <Navigation className='float-end float-md-start' />
                        </div>
                    </div>                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header