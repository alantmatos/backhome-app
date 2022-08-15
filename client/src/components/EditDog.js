import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditDog = () => {

    let navigate = useNavigate();


    const handleEditPet = (e) => {
        e.preventDefault();
    
        fetch(`/owners/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                {
                    name: name,
                    phone: phone,
                    e_mail: e_mail,
                    city_state: city_state
                }
            )})
            .then(res => res.json())
            .then(user => { setUser(user)
            });
            //navigate('/profile');
        }




    return ( 
        <>
        <h1> edit dog </h1>
        </>
     );
}
 
export default EditDog;