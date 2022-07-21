import React, {useState} from 'react'
import { Button, Form, Stack } from 'react-bootstrap'


const Forms = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Stack>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' size="lg" placeholder='Enter username' id='username' required />
                    <Form.Control.Feedback type="invalid">Please enter username</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' id='psw' />
                </Form.Group>
                {/* <Form.Group className='mb-3'>
                    <Form.Label>Select Course</Form.Label>
                    <Form.Select aria-label='defaultSelect'>
                        <option>Select course</option>
                        <option value="1" selected>HTML5</option>
                        <option value="2">CSS3</option>
                        <option value="3">JavaScript</option>
                    </Form.Select>
                </Form.Group> */}
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                {/* <Form.Group className='mb-3'>
                    <Form.Check type='checkbox' label="Remember me" id='chk' />
                    <Form.Check type="radio" label="Choose any one" id="rdo" />
                    <Form.Switch label="Check this switch" id="switch" disabled />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Check label="One" inline id="chk1" name="groupChk" />
                    <Form.Check label="Two" inline id="chk2" name="groupChk" />
                    <Form.Check type="radio" inline id="rdo1" name="groupRdo" label="First" />
                    <Form.Check type="radio" inline id="rdo2" name="groupRdo" label="Second" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Check label="One" reverse id="chk11" name="groupChk" />
                    <Form.Check label="Two" reverse id="chk21" name="groupChk" />
                    <Form.Check type="radio" reverse id="rdo11" name="groupRdo" label="First" />
                    <Form.Check type="radio" reverse id="rdo21" name="groupRdo" label="Second" />
                    <Form.Range value={90}/>
                </Form.Group> */}
                <Form.Group className='mb-3 d-grid'>
                    <Button variant='primary' type="submit" className=''>Login Now</Button>
                </Form.Group>
            </Form>
        </Stack>
    )
}

export default Forms
