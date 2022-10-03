import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function About() {
    return (
        <Container sx={{ flexGrow: 1 }} columns={{ xs: 2, sm: 4, md: 6, lg: 9 }}>
            <Box>
            <h1>About Me</h1>
            <img src={process.env.PUBLIC_URL + '/assets/images/headshot.png'} alt={'headshot'} className="img-fluid rounded-circle"></img>
            </Box>
            <br />
            <Box>
                <h4>Hi I'm Mackenzie</h4>
                <p>
                    I am a full stack developer based in Sydney, Australia. With a focus on attention to detail, creating polished and efficient code and working with people, my passion lies in software development and product management in the technology space.
                </p>
                <p>
                    I have a certificate in full stack develop from the University of Sydney Coding Bootcamp. 
                </p>
            </Box>        
        </Container>
    );
}