import React from 'react'
import { Badge, Button } from 'react-bootstrap'

const Badges = () => {
    return (
        <div>
            <Badge pill bg="primary">New</Badge>
            <h1>My Badge <Badge bg="success">25</Badge></h1>
            <Button variant="dark" className="rounded-pill">Notifications <Badge pill bg="light" text="dark">10</Badge></Button>
        </div>
    )
}

export default Badges
