import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

const Navs = () => {
    return (
        <div className="m-3 p-3">
            <Nav fill variant="pills" defaultActiveKey="/home" onSelect={(key)=>alert(`${key}`)}>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="link-2">Service</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown">
                    <NavDropdown.Item href="#">Sub Menu 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sub Menu 2</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Sub Menu 3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav fill variant="pills" className="flex-column w-25 mt-2" defaultActiveKey="/home" >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="link-2">Service</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown">
                    <NavDropdown.Item href="#">Sub Menu 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sub Menu 2</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Sub Menu 3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    )
}

export default Navs
