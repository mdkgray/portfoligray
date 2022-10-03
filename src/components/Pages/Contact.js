import React from 'react';
import { about } from '../../content';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#001C55' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));  


export default function Contact() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid 
                container 
                spacing={3}
                padding={4}
                display="flex" 
                justifyContent="center" 
                >
                <Grid item xs={11} md={4}>
                    <Item>
                        <Box 
                            spacing={3}
                            padding={4}
                            margin={5}
                            >
                            <h1>Lets Connect</h1>
                            <Box 
                                padding={4}
                                margin={5}
                                >
                                <Link href="mailto:mdkulen@gmail.com" underline="none">
                                    <Stack spacing={2} direction="row" >
                                        <Button variant="contained"><EmailIcon className="m-1"/>mdkulen@gmail</Button>
                                    </Stack>
                                </Link>
                            </Box>
                            <Box 
                                margin={2}>
                                <a href={about.social.github} target="_blank" rel="noopener noreferrer" className="mx-2"><GitHubIcon /></a>
                                <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2"><LinkedInIcon /></a>
                                <a href={about.social.twitter} target="_blank" rel="noopener noreferrer" className="mx-2"><TwitterIcon /></a>
                            </Box>
                        </Box>
                    </Item>
                </Grid>

                <Grid 
                    item xs={11} 
                    md={7}
                    container
                    >
                    <Item>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '50ch'}}}
                            noValidate
                            autoComplete="off"
                            display="flex" 
                            justifyContent="center"
                            >
                            <Box 
                                padding={2}
                                margin={1}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Name"
                                    placeholder="Enter Name"
                                    multiline
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Email"
                                    placeholder="example@example.com"
                                    multiline
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={5}
                                />
                                <Stack spacing={2} direction="row" margin={3}>
                                    <Button variant="contained" className="mx-auto">Submit</Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
