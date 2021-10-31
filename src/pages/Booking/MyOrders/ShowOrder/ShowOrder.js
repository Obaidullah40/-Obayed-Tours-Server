import React from 'react';
import { Card, Col } from 'react-bootstrap';
import DeleteOrder from '../DeleteOrder/DeleteOrder';


const ShowOrder = ({ showOrder }) => {
    const { name, phone, email, address } = showOrder;
    
    return (
        <div className="service">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {email}
                        </Card.Subtitle>
                        <Card.Text>
                            <p>{phone}</p>
                            <p>{address}</p>
                        </Card.Text>
                        <Card.Link href="#"></Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    
                </Card>
            </Col>
        </div>
    );
};

export default ShowOrder;