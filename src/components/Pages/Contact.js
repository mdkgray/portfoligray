import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { about } from '../../content';


export default function Contact() {
    return (
        <React.Fragment className="container">
            <CssBaseline />
            <Container className="container d-flex flex-direction-column col-md-11 justify-content-center mt-5">
                <Box className="container row col-md-5">
                    <h1>Contact</h1>
                    <p>Get in touch</p>
                    <div>
                        <a href="mailto:mdkulen@gmail.com">
                            <Stack spacing={2} direction="row" centered={'true'}>
                                <Button variant="contained" className="mx-auto"><EmailIcon className="m-1"/>mdkulen@gmail</Button>
                            </Stack>
                        </a>
                    </div>
                    <div>
                        <a href={about.social.github} target="_blank" rel="noopener noreferrer" className="mx-2"><GitHubIcon /></a>
                        <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2"><LinkedInIcon /></a>
                        <a href={about.social.twitter} target="_blank" rel="noopener noreferrer" className="mx-2"><TwitterIcon /></a>
                    </div>
                </Box>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '50ch'}}}
                    noValidate
                    autoComplete="off"
                    className="container row col-md-6 justify-content-center"
                >
                    <div className='col-md-9'>
                        <TextField
                            id="outlined-textarea"
                            label="Name"
                            placeholder="Enter Name"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Email"
                            placeholder="example@example.com"
                            multiline
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={5}
                        />

                        <Stack spacing={2} direction="row">
                            <Button variant="contained" className="mx-auto">Submit</Button>
                        </Stack>
                    </div>
                </Box>                
            </Container>
        </React.Fragment>        
    );
}
