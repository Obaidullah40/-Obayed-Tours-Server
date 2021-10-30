import React from 'react';
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Offer.css";

const Offer = ({ offer }) => {
    const { _id, name, rating, price, description, img } = offer;
    return (
        <div className="rounded">
            <Col>
                <Card className="image mb-4">
                    <Image
                        className="image"
                        variant="top"
                        src={img}
                        height="200px"
                        rounded-top
                    />
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={8}>
                                <h4>{name}</h4>
                                <small className="text-warning">
                                    <i>{rating}</i>
                                </small>
                            </Col>
                            <Col className="text-danger" xs={6} md={4}>
                                ${price}
                            </Col>
                        </Row>

                        <Card.Text className="text-secondary">
                            {description}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <Button className="mt-3" variant="warning">
                                Book Appointment
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Offer;