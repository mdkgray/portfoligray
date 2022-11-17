import React from 'react';
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

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
                padding={1}
                margin={2}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h6">Hi there! My name is Mackenzie Gray.</Typography>
                </ThemeProvider>
                <br />
                <ThemeProvider theme={theme}>
                    <Typography variant="h6">I have a certificate in full stack web development from the University of Sydney. Seeking a role as a software developer with aspirations to transition into product management.</Typography>
                </ThemeProvider>
                <br />
                <ThemeProvider theme={theme}>
                    <Typography variant="h6">Past experiences as a semi-professional rugby player and Chiropractor have allowed me to become skilled in working within a team, communication, problem solving and professionalism. I thrive in a fast paced, quality driven team environment and thoroughly enjoy working with people and collaborating with other developers on projects.</Typography>
                </ThemeProvider>
                <br />
                <ThemeProvider theme={theme}>
                    <Typography variant="h6">I am an eager learner, team player and someone that takes tremendous pride in their work. I am excited to apply the technical skills I have learnt with my collaborative nature and past experiences to write and produce efficient and clean code.</Typography>
                </ThemeProvider>
                <br />
                <ThemeProvider theme={theme}>
                    <Typography variant="h6">Proficient in technologies such as MongoDB, Express, React, Node, Javascript, HTML, CSS, MySQL, Sequelize, GraphQL, npm and Git. Currently learning Python and Typescript.</Typography>
                </ThemeProvider>
                <br />
                <ThemeProvider theme={theme}>
                    <Typography variant="h6">Check out my <a href="https://github.com/mdkgray" target="_blank" rel="noopener noreferrer">GitHub</a> as well as my <a href="https://github.com/mdkgray/fireStarter" target="_blank" rel="noopener noreferrer">Firestarter</a>  project. More examples of some of my work found on the <Link to={'Projects'}>projects</Link> page of my portfolio.</Typography>
                </ThemeProvider>
            </Box>        
        </Container>
    );
}