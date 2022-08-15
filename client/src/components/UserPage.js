import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const UserPage = ({user, fetchData, setUser, setReload, reload}) => {

    



    let dogArr = [];
    { user ? user.dogs.map((dog)=> {
        dogArr.push(dog)
    }) : console.log("no user")}


    const renderDogInfo = dogArr.map(dog => {
        return  ( 
    <div key={dog.id} className='dog_info'>
    <h3> Doggo Info</h3>
    <p>Name: {dog.name}.</p> 
    <p>Age: {dog.age}.</p> 
    <p>Breed: {dog.breed}.</p> 
    <p>Favorite Food: {dog.favorite_food}.</p>
    <p>Tag Number: {dog.tag_number}.</p> 
    <p>Safe-Tag: {dog.safe_tag_number}.</p> 

    {/* <Link to='/editDog' className='nav_buttons'> Edit Pet </Link> */}
    <button className='nav_buttons' onClick={(e)=>{handleEditPet(e)}}> Edit Pet</button>
    <button   onClick={()=>{handleDeletePet(dog.id)}} className='nav_buttons'> Remove </button>
    </div>
        )
    })


    const handleDeletePet = (id) => {
        fetch(`/dogs/${id}`,{
        method: 'DELETE'})
        .then((r) => { 
            if(r.ok){
                setReload(!reload)
            } else {
                console.log('res not ok')
            }
         });         
    }

  

const handleEditPet = (pet) => {
    console.log(pet)

}


    return ( 
        <>        
        <div className='user_info'>
            <div>
                <h1>{user ? `Hi, ${user.name}.` : ''}</h1> 
                <p> {user ? `Phone Number: ${user.phone}.` : ''}</p>
                <p> {user ? `E-mail: ${user.e_mail}.` : ''}</p>
                <p> {user ? `City_State ${user.city_state}.` : ''}</p> 
            </div>
            <Link to='/editprofile' className='nav_buttons'> Edit My Profile</Link>
            <Link to='/addapet' className='nav_buttons'> Add A Pet</Link>
        </div>
        <div>
            {renderDogInfo}
        </div>

        </>

     );
}
 
export default UserPage;