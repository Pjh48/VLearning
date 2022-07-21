import React from 'react'
import { Button, Dropdown, DropdownButton, FloatingLabel, Form, InputGroup, SplitButton } from 'react-bootstrap'

const Forms1 = () => {
    return (
        <div>
            <Form validated>
                <InputGroup className="mb-3" hasValidation>
                    <InputGroup.Text id="username">Username</InputGroup.Text>
                    <Form.Control placeholder="Enter Username" aria-describedby='username' required></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control type="email" placeholder="Enter Email"></Form.Control>
                    <InputGroup.Text>Email</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control type="email" placeholder="Enter Email"></Form.Control>
                    <InputGroup.Text>@</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control type="email" placeholder="Enter Email"></Form.Control>
                    <Button variant="success">Search</Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <DropdownButton title="Services" id="services" variant="primary">
                        <Dropdown.Header><h4>Services</h4></Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">HTML5</Dropdown.Item>
                        <Dropdown.Item href="#">CSS3</Dropdown.Item>
                        <Dropdown.Item href="#">JavaScript</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control type='text' placeholder='Select Course from left dropdown' />
                </InputGroup>
                <InputGroup className="mb-3">
                    <SplitButton title="Services" id="services" variant="primary">
                        <Dropdown.Header><h4>Services</h4></Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">HTML5</Dropdown.Item>
                        <Dropdown.Item href="#">CSS3</Dropdown.Item>
                        <Dropdown.Item href="#">JavaScript</Dropdown.Item>
                    </SplitButton>
                    <Form.Control type='text' placeholder='Select Course from left dropdown' />
                </InputGroup>
                <FloatingLabel controlId="input1" label="Enter username" size="sm">
                    <Form.Control placeholder='Enter username' />
                </FloatingLabel>
                <FloatingLabel controlId="input2" label="Enter Message">
                    <Form.Control as="textarea" style={{height:"100px"}} placeholder='Enter username' />
                </FloatingLabel>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Forms1
