import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function CardInfo(props) {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL + props.image}
                alt={'projectImage'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                    {props.technologies}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={props.sourceCode} target="_blank" rel="noopener noreferrer" underline="none">
                    <Button size="small" variant="contained">GitHub</Button>
                </Link>
                <Link href={props.livePreview} target="_blank" rel="noopener noreferrer" underline="none">
                    <Button size="small" variant="outlined">Deployed</Button>
                </Link>
            </CardActions>
        </Card> 
    )
}