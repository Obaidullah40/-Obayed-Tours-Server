import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';
import "./Offers.css"


const Offers = () => {
     const [offers, setOffers] = useState([]);
     useEffect(() => {
         fetch("offer.json")
             .then((res) => res.json())
             .then((data) => setOffers(data));
     }, []);

     return (
         <div className="container" id="offers">
             <Row>
                 <Col xs={1} md={2}></Col>
                 <Col xs={12} md={7}>
                     <h1 className="fs-1 mt-5">
                         Special{" "}
                         <small className="text-warning heading">
                             Deals And
                             <br /> Last Minute
                         </small>{" "}
                         Amazing Offers
                     </h1>
                     <p className="text-info">
                         Our offers are specialized in their field and have more
                         than 10 years of experiences. Aenean massa cum sociis
                         Theme natoque.
                     </p>
                 </Col>
                 <Col xs={1} md={3}></Col>
             </Row>

             <Row xs={1} md={3} xxl={4} className="g-4">
                 {offers.map((offer) => (
                     <Offer key={offer.id} offer={offer}></Offer>
                 ))}
             </Row>
         </div>
     );
};

export default Offers;