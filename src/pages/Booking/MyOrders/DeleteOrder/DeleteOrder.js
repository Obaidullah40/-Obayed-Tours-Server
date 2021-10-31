import React, { useEffect, useState } from 'react';
import ShowOrder from '../ShowOrder/ShowOrder';

const DeleteOrder = () => {
 const [offers, setOffers] = useState([]);

 useEffect(() => {
     fetch("http://localhost:5000/books")
         .then((res) => res.json())
         .then((data) => setOffers(data));
 }, []);

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
                     alert("deleted successfully");
                     const remainingOffers = offers.filter(
                         (service) => service._id !== id
                     );
                     setOffers(remainingOffers);
                 }
                 console.log(data);
             });
     }
 };

 return (
     <div>
         {offers.map((offer) => (
             <ShowOrder key={offer._id} offer={offer}></ShowOrder>
             //  <div key={offer._id}>
             //      <h3>{offer.name}</h3>
             //      <button onClick={() => handleDelete(offer._id)}>Delete</button>
             //  </div>
         ))}
     </div>
 );
};

export default DeleteOrder;