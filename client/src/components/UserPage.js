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
    <div key={dog.id} className='dog_container'>

        <div className='dog_header'>        
        <img className='dog_img' src={dog.img_url}></img>
        <h2>Name: {dog.name}.</h2>
        </div>

        <div className='dog_info'>
        <p>Age: {dog.age}.</p> 
        <p>Breed: {dog.breed}.</p> 
        <p>Favorite Food: {dog.favorite_food}.</p>
        <p>Tag Number: {dog.tag_number}.</p> 
        <p>Safe-Tag: {dog.safe_tag_number}.</p>

        <div className='dog_btn'>
             {/* <Link to='/editDog' className='nav_buttons'> Edit Pet </Link> */}
            <button className='nav_buttons' onClick={(e)=>{handleEditPet(e)}}> Edit Pet</button>
            <button   onClick={()=>{handleDeletePet(dog.id)}} className='nav_buttons'> Remove </button>
        </div>
        
        </div>
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
        <div className='hero_container'> 

        <div className='user_container'>

            <div className='user_header'>

                <div className='user_img'>
                {user? <img src={user.img_url} className="img_size" alt="User Image"></img> : null}
                </div>

                <div className='user_name'>
                <h1>{user ? `Hi, ${user.name}.` : null}</h1> 
                </div>

            </div>
            <hr></hr>



            <div className='user_info'>
                <p> {user ? `Phone Number: ${user.phone}.` : ''}</p>
                <p> {user ? `E-mail: ${user.e_mail}.` : ''}</p>
                <p> {user ? `City_State ${user.city_state}.` : ''}</p> 
            </div>

            <div className='user_btn'>
            <Link to='/editprofile' className='nav_buttons'> Edit My Profile</Link>
            <Link to='/addapet' className='nav_buttons'> Add A Pet</Link>
            </div>

        

        </div>

        <br></br>


        <div className='dog_container'>
            {renderDogInfo}
        </div>

        </div>

     );
}
 
export default UserPage;