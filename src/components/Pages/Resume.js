import React from 'react';
import { skills } from '../../content';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Resume() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} padding={4}>
                <Grid item xs={4}>
                    <Item>
                        <h5>Check out my resume:</h5>
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <h5>Skills</h5>
                    <Item>
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164} padding={4}>
                        {skills.map((skills) => (
                            <ImageListItem key={skills.image}>
                            <img
                                src={process.env.PUBLIC_URL + `${skills.image}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={process.env.PUBLIC_URL + `${skills.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={skills.name}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

// add a tag for link to resume and add icons for skills 