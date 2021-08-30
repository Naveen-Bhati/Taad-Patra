import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand>
                    <Link to='/' style={{ textDecoration: 'none', fontFamily: "cursive", fontWeight: "bolder", fontSize: "1.3rem" }}>Taad-Patra</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{
                                borderRadius: '50px'
                            }} />
                        </Form>
                    </Nav>
                    <Nav>

                        <Link style={{ textDecoration: 'none', alignSelf: "center" }} to='/mynotes'>
                            My Notes
                        </Link>

                        <NavDropdown title="Naveen Bhati" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
