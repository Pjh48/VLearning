import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Html5 from '../Assets/html5.png'
import Css3 from '../Assets/css3.png'

const Cards = () => {
    return (
        // <div className='row'>
        //     <div className="col">
        //     <Card bg="primary" text="white" border="danger">
        //         <Card.Img variant='top' src={Html5} />
        //         <Card.Body>
        //             <Card.Title>HTML5</Card.Title>
        //             <Card.Text>
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste alias non architecto laboriosam magnam soluta, suscipit numquam. Sed vitae atque est, itaque molestias deserunt!
        //             </Card.Text>
        //         </Card.Body>
        //     </Card>
        //     </div>
        //     <div className="col">
        //     <Card>
        //         <Card.Img variant='top' src={Css3} />
        //         <Card.Body>
        //             <Card.Title>HTML5</Card.Title>
        //             <Card.Text>
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste alias non architecto laboriosam magnam soluta, suscipit numquam. Sed vitae atque est, itaque molestias deserunt!
        //             </Card.Text>
        //         </Card.Body>
        //     </Card>
        //     </div>
        // </div>

        <div className="row">
            <div className="col-12">
                <CardGroup>
                    <Card bg="light" text="dark" className="m-1">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima repellat corrupti nisi, quasi ad molestias nobis quis ipsum eos?</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>Footer</Card.Footer>
                    </Card>
                    <Card bg="light" text="dark" className="m-1">
                        <Card.Header>Header 2</Card.Header>
                        <Card.Body>
                            <Card.Title>Title 2</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima repellat corrupti nisi, quasi ad molestias nobis quis ipsum eos?</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>Footer 2</Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}

export default Cards
