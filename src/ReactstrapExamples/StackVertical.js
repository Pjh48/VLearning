import React from 'react'
import {Button, Form, StackVertical} from 'react-bootstrap'

const StackVerticalEx = () => {
    return (
        <>
            {/* <Stack gap={2} className="my-5">
                <Button variant="primary">Save Changes</Button>
                <Button variant='outline-dark'>Cancel</Button>
            </Stack> */}
            <StackVertical direction='horizontal' gap={3}>
                <Form.Control type='search' placeholder='Search here'></Form.Control>
                <Button variant='success'>Submit</Button>
                <div className='vr'></div>
                <Button variant='outline-danger'>Reset</Button>
            </StackVertical>
        </>
    )
}

export default StackVerticalEx
