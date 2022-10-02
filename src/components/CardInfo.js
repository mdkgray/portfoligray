import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

export default function CardInfo(props) {
    return (
        <div>       
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item>
                            <Card sx={{ maxWidth: 400 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={props.image}
                                    alt={''}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {props.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {props.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <a href={props.sourceCode}><Button size="small" variant="contained">GitHub</Button></a>
                                    <a href={props.livePreview}><Button size="small" variant="outlined">Deployed</Button></a>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}