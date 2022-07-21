import React from 'react'
import {Accordion} from 'react-bootstrap'
import './accordion.css'

const accordion1 = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey='0' className='bg-transparent'>
                <Accordion.Header>
                    <h2>Heading # 1</h2>
                </Accordion.Header>
                <Accordion.Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, neque! Consequatur saepe dignissimos aliquam doloremque, aut rerum optio deleniti iure, ipsam perferendis quod fuga at?</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1' className='bg-transparent'>
                <Accordion.Header>
                    <h2>Heading # 1</h2>
                </Accordion.Header>
                <Accordion.Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, neque! Consequatur saepe dignissimos aliquam doloremque, aut rerum optio deleniti iure, ipsam perferendis quod fuga at?</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default accordion1
