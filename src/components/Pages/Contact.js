import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Contact() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <div>
                    <h3>Questions? Get in touch here</h3>
                </div>
                <br/>
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

                <Stack spacing={2} direction="row">
                    <Button variant="contained">Submit</Button>
                </Stack>
            </div>
        </Box>
        
    );
}