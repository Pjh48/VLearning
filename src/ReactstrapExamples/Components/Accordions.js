import React from 'react'
import { Accordion } from 'react-bootstrap'

const Accordions = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className='bg-warning'>
                    <Accordion.Header className='bg-warning'>
                        <h3>Heading # 1</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam sequi sit corporis. Repellendus quidem nihil molestiae impedit asperiores enim reiciendis magnam sunt ex fugiat?</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h3>Heading # 1</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam sequi sit corporis. Repellendus quidem nihil molestiae impedit asperiores enim reiciendis magnam sunt ex fugiat?</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Accordions
