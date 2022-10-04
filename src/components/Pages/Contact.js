import React, { useState } from "react";
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#001C55' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));  


export default function Contact() {
    const [formState, setFormState ] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleFormChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Email required and must be valid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(capitalizeFirstLetter(`${event.target.name} is a required field`));
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!errorMessage) {
            console.log(formState);
        }
    }

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
                                <Link 
                                    href="mailto:mdkulen@gmail.com" underline="none"
                                    display="flex" 
                                    justifyContent="center"
                                    columns={{ xs: 1, sm: 8, md: 12 }}>
                                    <Stack spacing={2} direction="row" >
                                        <Button variant="contained"><EmailIcon className="m-1"/>mdkulen@gmail</Button>
                                    </Stack>
                                </Link>
                                <Stack 
                                    spacing={2} 
                                    direction="row"
                                    display="flex" 
                                    justifyContent="center"
                                    padding={4}
                                    columns={{ xs: 1, sm: 8, md: 12 }}>
                                    <Button variant="text"><LocationOnIcon />Sydney, Australia</Button>
                                </Stack>
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
                    md={6}
                    container
                    display="flex" 
                    justifyContent="center"
                    columns={{ xs: 1, sm: 8, md: 12 }}
                    >
                    <Item>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '50ch'}}}
                            noValidate
                            autoComplete="off"
                            display="flex" 
                            justifyContent="center"
                            columns={{ xs: 1, sm: 8, md: 12 }}
                            >
                            <Box 
                                padding={2}
                                margin={1}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Name"
                                    name='name'
                                    placeholder="Enter Name"
                                    multiline
                                    onBlur={handleFormChange}
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Email"
                                    name='email'
                                    placeholder="example@example.com"
                                    multiline
                                    onBlur={handleFormChange}
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="What's on your mind?"
                                    name='message'
                                    multiline
                                    rows={5}
                                    onBlur={handleFormChange}
                                />
                                <Stack spacing={2} direction="row" margin={3}>
                                    <Button 
                                        variant="contained" 
                                        className="mx-auto"
                                        onSubmit={handleFormSubmit}
                                        >
                                        Submit</Button>
                                </Stack>
                                {errorMessage && (<p>{errorMessage}</p>)}
                            </Box>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
