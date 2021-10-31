import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';



const ShowOrder = ({ showOrder }) => {
    const [offers, setOffers] = useState([]);
    const { name, phone, email, address } = showOrder;

    // DELETE AN USER
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/books/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        window.confirm("Are You sure, You want to delete");
                        const remaining = offers.filter(
                            (offer) => offer._id !== id
                        );
                        setOffers(remaining);
                        alert("Deleted Successfully");
                        
                    }
                    console.log(data);
                });
        }
    };
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

                        <Card.Link href="#">
                            <button
                                className="bg-warning"
                                onClick={() => handleDelete(showOrder._id)}
                            >
                                Delete
                            </button>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ShowOrder;