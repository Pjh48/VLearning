import React, { useState } from 'react'
import { Alert, Button, Fade } from 'react-bootstrap'

const Alerts = () => {
    const [show, setShow]=useState(true);
    return (
        <div>
            <Alert  show={show} variant='primary' className='position-relative' >
                <Alert.Heading>This is alert heading</Alert.Heading>
                This is a test primary alert &nbsp;
                <Alert.Link href="#">Read more...</Alert.Link>
                <Button variant="secondary" className='rounded-pill position-absolute top-0 start-100 translate-middle' onClick={()=>setShow(false)}>X</Button>
            </Alert>
            {!show && <Button variant="primary" onClick={()=>setShow(true)}>Show alert</Button>}
        </div>
    )
}

export default Alerts
