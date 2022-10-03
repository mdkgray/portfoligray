import React from 'react';
import { projects } from '../../content';
import CardInfo from '../CardInfo';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Projects() {
    return (
        <Box sx={{ flexGrow: 1 }} padding={4} margin={4}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, sm: 8, md: 12 }}>
                {projects.map((project, i) => (
                    <Grid item xs={2} sm={4} md={4} key={i}>
                        <Item>
                            <CardInfo
                                key={i}
                                name={project.name}
                                image={project.image}
                                description={project.description}
                                technologies={project.technologies}
                                sourceCode={project.sourceCode}
                                livePreview={project.livePreview}
                            />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}