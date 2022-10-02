import React from 'react'
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {

    return (
    <div>
        <Navbar bg="dark" variant="dark" className="row">
            <Container className="container width-100% d-flex justify-content-around">
                <Navbar.Brand href="about">
                    <img
                    alt="zorb"
                    src={process.env.PUBLIC_URL + "/assets/images/ZORB.png"}
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