import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowOrder from '../ShowOrder/ShowOrder';

const ShowOrders = () => {
        const [showOrders, setShowOrders] = useState([])
    useEffect(() => {
        fetch("https://obscure-dusk-13738.herokuapp.com/books")
            .then((res) => res.json())
            .then((data) => setShowOrders(data));
    }, [])

    return (
        <div id="ShowOrders">
            <h2 className="text-primary mt-5">My Orders</h2>
            <Row xs={1} md={2} className="g-4">
                {showOrders.map((showOrder) => (
                    <ShowOrder
                        key={showOrder._id}
                        showOrder={showOrder}
                    ></ShowOrder>
                ))}
            </Row>
        </div>
    );
};

export default ShowOrders;