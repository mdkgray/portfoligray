import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function About() {
    return (
        <Container sx={{ flexGrow: 1 }} columns={{ xs: 2, sm: 4, md: 6, lg: 9 }}>
            <Box
                margin={5}
                padding={4}>
                <img src={process.env.PUBLIC_URL + '/assets/images/headshot.png'} alt={'headshot'} className="img-fluid rounded-circle"></img>
            </Box>
            <Box 
                container
                padding={3}
                margin={3}>
                <h3>Hi I'm Mackenzie</h3>
                <br />
                <h5>
                    I am a full stack developer based in Sydney, Australia. An eager learner, team player and someone that takes tremendous pride in their work and attention to detail. My passion lies in software development and product management in the technology space.
                </h5>
                <br />
                <h5>
                    I have a certificate in full stack develop from the University of Sydney Coding Bootcamp. 
                </h5>
            </Box>        
        </Container>
    );
}