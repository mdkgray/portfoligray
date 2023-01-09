import React from 'react';
import { skills, resume } from '../../content';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const theme = createTheme({
    typography: {
        h3: {
            color: 'black'
        },
        h2: {
            color: 'white'
        }
    }
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#D3E3FD',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 20
})); 

console.log(resume);

export default function Resume() {
    return (
        <Container sx={{ flexGrow: 1 }} columns={{ xs: 2, sm: 4, md: 6 }}>
            <Grid 
                    container 
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 1, sm: 8, md: 12 }} 
                    margin={2}
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                >                    
                <Grid 
                    item xs={4}
                    padding={1}
                    margin={3}
                    >
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2">Resume</Typography>
                    </ThemeProvider>
                    <br />
                    <Box
                        sx={{
                            typography: 'body1',
                            '& > :not(style) + :not(style)': {
                            ml: 2,
                            },
                        }}>
                        <Link
                            href={resume.resume}
                            download
                            underline="none"
                            display="flex"
                            justifyContent="center"
                            >
                            <Stack spacing={2} direction="row">
                                <Button size="large" variant="contained">
                                    <DownloadIcon /> Click here to download
                                </Button>
                            </Stack>
                        </Link>
                    </Box>                    
                </Grid>

                <Item>
                    <Box columns={{ xs: 2, sm: 4, md: 6 }}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3">Proficiencies</Typography>
                        </ThemeProvider>
                        <Grid 
                            container 
                            spacing={{ xs: 2, md: 3 }} 
                            columns={{ xs: 2, sm: 4, md: 6 }}
                            padding={3}
                            margin={3}
                            display="flex" 
                            justifyContent="space-around" 
                            alignItems="center"
                            >
                            {skills.map((skills) => (
                                <img
                                    src={process.env.PUBLIC_URL + `${skills.image}`}
                                    srcSet={process.env.PUBLIC_URL + `${skills.image}`}
                                    alt={skills.name}
                                    height="150"
                                    width="150"
                                    spacing={{ xs: 2, md: 3 }}
                                    padding={{ xs: 2, md: 3 }}
                                />
                            ))}
                        </Grid>
                    </Box>
                </Item>                
            </Grid>
        </Container>
    );
}