import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { about } from '../content';

function Footer() {
    return (
    <div className="fixed-bottom m-3">
        <a href={about.social.github} target="_blank" rel="noopener noreferrer" className="mx-2"><GitHubIcon /></a>
        <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2"><LinkedInIcon /></a>
        <a href={about.social.twitter} target="_blank" rel="noopener noreferrer" className="mx-2"><TwitterIcon /></a>
    </div>
    )
}

export default Footer