import React, { useState } from 'react'
import { Accordion, Alert, Badge, Breadcrumb, Button, Card, CardGroup, Carousel, CarouselItem, CloseButton, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap'
import F1 from '../ReactstrapExamples/Assets/fulls.jpg'
import F2 from '../ReactstrapExamples/Assets/fullstack.png'
import F3 from '../ReactstrapExamples/Assets/mern1.png'

const Demo1 = () => {
    const [show, setShow] = useState(true);
    const [validated, setValidated]=useState(false);
    const formValidate=event=>{
        const form=event.currentTarget;
        if(form.checkValidity()===false){
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <>
            <Container fluid className='px-0'>
                <Carousel fade>
                    <Carousel.Item>
                        <img src={F1} alt="First Slider" className='img-fluid' />
                        <Carousel.Caption className="text-start translate-middle title">
                            <h3>First Slider</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, minus! Omnis eaque ex voluptate dolorem.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <CarouselItem>
                        <img src={F2} alt="Second Slider" className='img-fluid' />
                        <Carousel.Caption className="text-start translate-middle title">
                            <h3>Second Slider</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, minus! Omnis eaque ex voluptate dolorem.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img src={F3} alt="Third Slider" className='img-fluid' />
                        <Carousel.Caption className="text-start translate-middle title">
                            <h3>First Slider</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, minus! Omnis eaque ex voluptate dolorem.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col className="bg-success bg-opacity-25 bg-gradient p-3">
                        <Alert show={show} className='position-relative'>
                            <Alert.Heading>Alert Heading</Alert.Heading>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas quo distinctio, delectus tenetur qui eos, quidem corrupti numquam deleniti debitis! Perferendis asperiores sunt maiores.</p>
                            <CloseButton className='position-absolute top-0 start-100 translate-middle' onClick={()=>setShow(false)}/>
                        </Alert>
                        <h1>Total Courses <Badge bg="primary">6</Badge></h1>
                        <Button variant="primary" className="position-relative">Notifications <Badge pill bg="warning" text="dark" className="position-absolute top-0 start-100 translate-middle">6</Badge></Button>
                        <Breadcrumb className="py-2">
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" active>Product</Breadcrumb.Item>
                        </Breadcrumb>
                        <CardGroup>
                            <Card bg="warning" text="white" className="mx-1">
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle>Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, velit.</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href="#">Read More...</Card.Link>
                                </Card.Footer>
                            </Card>
                            <Card bg="success" text="white" className="mx-1">
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle>Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, velit.</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link href="#">Read More...</Card.Link>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                        <Card className="m-1" border="danger">
                            <Card.Img variant="top" src={F1} />
                            <Card.Body>
                                <Card.Title>Full Stack Developer</Card.Title>
                                <Card.Subtitle>6 months training</Card.Subtitle>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid repudiandae velit, exercitationem officia modi?</p>
                                </Card.Text>
                                <Card.Link href="#">Read more...</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="bg-warning p-2">
                        <Form noValidate validated={validated} onSubmit={formValidate}>
                            <Form.Group className='mb-2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder='Enter valid email' required></Form.Control>
                                <Form.Control.Feedback type="invalid">Please enter valid email id</Form.Control.Feedback>
                            </Form.Group>
                            <InputGroup className='mb-2'>
                                <InputGroup.Text>+91</InputGroup.Text>
                                <Form.Control type='tel' placeholder='9xxxxxxxxx' maxLength={10} required />
                                <Form.Control.Feedback type="invalid">Please enter valid phone no</Form.Control.Feedback>
                            </InputGroup>
                            <Form.Group className='mb-2'>
                                <Form.Label>Choose Course</Form.Label>
                                <Form.Select required aria-label='Default'>
                                    <option value="">Select</option>
                                    <option value="1">HTML5</option>
                                    <option value="2">CSS3</option>
                                    <option value="3">JavaScript</option>
                                    <option value="4">React Js</option>
                                    <option value="5">Node Js</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Please select any one course</Form.Control.Feedback>
                            </Form.Group>
                            <Form.FloatingLabel label="Enter message"  controlId="input1" className="mb-2">
                                <Form.Control as="textarea" rows={3} placeholder="Enter message" className="mesg" required></Form.Control>
                                <Form.Control.Feedback type="invalid">Please enter your query</Form.Control.Feedback>
                            </Form.FloatingLabel>
                            <Form.Group className='mb-2'>
                                <Form.Label className="pe-5">Gender:</Form.Label>
                                <Form.Check type="radio" inline required label="Male" id="rdo1" name="gender" />
                                <Form.Check type="radio" required inline label="Female" id="rdo2" name="gender"  />
                            </Form.Group>
                            <Form.Group className='mb-2'>
                                <Form.Label className="pe-4">Education:</Form.Label>
                                <Form.Check type="checkbox"  inline label="SSC" id="chk1" name="chk" />
                                <Form.Check type="checkbox"  inline label="Inter" id="chk2" name="chk" />
                                <Form.Check type="checkbox"  inline label="Graduate" id="chk3" name="chk" />
                                <Form.Control.Feedback type="invalid">Please enter valid email id</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='mb-2'>
                                <Form.Label className="pe-5">Upload Resume:</Form.Label>
                                <Form.Control type="file" required  />
                                <Form.Control.Feedback type="invalid">Please upload your resume</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3 d-grid">
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    <h3>Accordion Header #1</h3>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vero et quis quidem excepturi perspiciatis veritatis debitis? Est praesentium tempore beatae expedita excepturi numquam tempora.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    <h3>Accordion Header #2</h3>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vero et quis quidem excepturi perspiciatis veritatis debitis? Est praesentium tempore beatae expedita excepturi numquam tempora.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Image src={F1} roundedCircle width={100} height={100} ></Image>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Demo1
