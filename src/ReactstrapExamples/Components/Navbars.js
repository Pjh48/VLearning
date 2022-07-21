import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../../Assets/vlogo2.png'

const Navbars = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark" fixed="top" sticky="top" className="bg-opacity-50">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="V Learning" title="V Learning" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='mainNav' className="text-dark" />
                <Navbar.Collapse id="mainNav">
                    <Nav className='ms-auto fs-5'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <NavDropdown title="Courses">
                            <NavDropdown.Header>Frontend</NavDropdown.Header>
                            <NavDropdown.Item href="#html">HTML5</NavDropdown.Item>
                            <NavDropdown.Item href="#css">CSS3</NavDropdown.Item>
                            <NavDropdown.Item href="#javascript">JavaScript</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Backend</NavDropdown.Header>
                            <NavDropdown.Item href="#node">Node Js</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Contact Us</Nav.Link>
                        <Nav.Link href="#home">
                            <Button variant="warning">Sign In</Button>
                        </Nav.Link>
                        <Nav.Link href="#home">
                            <Button variant="danger">Sign Up</Button>
                        </Nav.Link>
                        <Navbar.Text>Signed In: Jagadeesh</Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars
