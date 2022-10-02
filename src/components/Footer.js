import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { about } from '../content';

function Footer() {
    return (
    <div>
        <a href={about.social.github}><GitHubIcon /></a>
        <a href={about.social.linkedin}><LinkedInIcon /></a>
        <a href={about.social.twitter}><TwitterIcon /></a>
    </div>
    )
}

export default Footer