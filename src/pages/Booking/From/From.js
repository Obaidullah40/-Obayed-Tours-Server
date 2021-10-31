import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import "./From.css"

const From = () => {
     const {
         register,
         handleSubmit,
         reset,
         formState: { errors },
     } = useForm();
     const { user } = useAuth();
     const onSubmit = (data) => {
        
         fetch("http://localhost:5000/books", {
             method: "POST",
             headers: {
                 "content-type": "application/json",
             },
             body: JSON.stringify(data),
         })
             .then((res) => res.json())
             .then((result) => {
                 if (result.insertedId) {
                     alert("Order processed Successfully");

                     reset();
                 }
             });
     };
     return (
         <div>
             <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                 <input defaultValue={user.displayName} {...register("name")} />

                 <input
                     defaultValue={user.email}
                     {...register("email", { required: true })}
                 />
                 {errors.email && (
                     <span className="error">This field is required</span>
                 )}
                 <input
                     placeholder="Address"
                     defaultValue=""
                     {...register("address")}
                 />
                 <input
                     placeholder="City"
                     defaultValue=""
                     {...register("city")}
                 />
                 <input
                     placeholder="phone number"
                     defaultValue=""
                     {...register("phone")}
                 />

                 <input className="bg-warning" type="submit" />
             </form>
         </div>
     );
};

export default From;