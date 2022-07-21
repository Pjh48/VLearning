import React from 'react'
import { Button, Container, Form, InputGroup, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../../Assets/vlogo2.png'

const OffcanvasNav = () => {
    return (
        <Navbar bg="warning" expand="lg" variant="dark" className="bgColor" fixed="top" sticky="top">
            <Container>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="V Learning" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='offCanvasNavbar' />
                <Navbar.Offcanvas id="offCanvasNavbar" placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>V Learning</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {/* <Form className="ms-auto pt-2">
                            <InputGroup size="sm">
                                <Form.Control className="bg-warning bg-opacity-25" type="search" id="search" name="search" placeholder="Search here..." aria-describedby='search' />
                                <Button className=" bg-opacity-25" variant="primary" type="submit" id="search">Search</Button>
                            </InputGroup>
                        </Form> */}
                        <Nav className="ms-auto fs-6">
                            <Nav.Link href="#" className="text-dark fw-bold">Home</Nav.Link>
                            <Nav.Link href="#" className="text-dark fw-bold">About Us</Nav.Link>
                            <Nav.Link href="#" className="text-dark fw-bold">Services</Nav.Link>
                            <Nav.Link href="#" className="text-dark fw-bold">Contact Us</Nav.Link>
                            <Nav.Link className="d-grid">
                                <Button variant="warning" size="sm">Sign In</Button>
                            </Nav.Link>
                            <Nav.Link className="d-grid">
                                <Button variant="dark" size="sm">Sign Up</Button>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default OffcanvasNav
