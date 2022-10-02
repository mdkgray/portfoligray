import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardInfo(props) {
    return (
        <div>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt={'projectImage'}
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
        </div>
    )
}