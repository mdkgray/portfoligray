import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { projects } from '../../content';
import CardInfo from '../CardInfo';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Projects() {
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-md-4">
                    <h1>Projects</h1>
                    <Box sx={{ width: '100%', boxShadow: 1, borderRadius: 2, margin: 3, padding: 3, }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction="row">
                            <Grid item xs={6}>
                                <Item>
                                    <div>
                                        {projects.map((project, i) => (
                                            <CardInfo
                                                key={i}
                                                name={project.name}
                                                image={project.image}
                                                description={project.description}
                                                technologies={project.technologies}
                                                sourceCode={project.sourceCode}
                                                livePreview={project.livePreview}
                                            />
                                        ))}
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>                
            </div>            
        </div>
    );
}