import React from 'react'
import { about } from '../content';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Footer() {
    return (
    <Box sx={{ width: '100%', maxWidth: 'auto', display: 'flex', justifyContent: 'center', bottom: 20, height: 'auto', marginBottom: 5  }}>
        <Stack 
            direction={{ xs: 'row', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <a href={about.social.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href={about.social.twitter} target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
        </Stack>        
    </Box>
    )
}

export default Footer