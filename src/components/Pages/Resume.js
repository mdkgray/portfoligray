import React from 'react';
import { skills } from '../../content';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function Resume() {
    return (
        <Container sx={{ flexGrow: 1 }} columns={{ xs: 2, sm: 4, md: 6 }}>
            <Grid 
                    container 
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 1, sm: 8, md: 12 }} 
                    padding={4}
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                >                    
                <Grid 
                    item xs={4}
                    padding={4}
                    margin={3}
                    >
                    <h2>Resume</h2>
                </Grid>

                <Box columns={{ xs: 2, sm: 4, md: 6 }}>
                    <h2>Skills</h2>
                    <Grid 
                        container 
                        spacing={{ xs: 2, md: 3 }} 
                        columns={{ xs: 2, sm: 4, md: 6 }}
                        padding={4}
                        margin={3}
                        display="flex" 
                        justifyContent="center" 
                        alignItems="center"
                        >
                        {skills.map((skills) => (
                            <img
                                src={process.env.PUBLIC_URL + `${skills.image}`}
                                srcSet={process.env.PUBLIC_URL + `${skills.image}`}
                                alt={skills.name}
                                height="150"
                                width="150"
                                spacing={{ xs: 2, md: 3 }}
                                padding={{ xs: 2, md: 3 }}
                            />
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Container>
    );
}