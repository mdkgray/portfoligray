import React from 'react'
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {

    return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="about">
                    <img
                    alt="zorb"
                    src="/assets/images/ZORB.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Mackenzie Gray
                </Navbar.Brand>
                <Navigation />
            </Container>
        </Navbar>
    </div>
    )
}

export default Header