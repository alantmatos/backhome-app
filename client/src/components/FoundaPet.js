import { useState } from "react";
import React from 'react';




const FoundaPet = () => {

    const [ pet, setPet ] = useState([]);
    const [ petTag, setPetTag] = useState('');
    const [ safeTagInput, setSafeTagInput ] = useState('');
    const [ toggle, setToggle ] = useState(false);
    const [ ownerInfo, setOwnerInfo ] = useState(false);
    const [ wrongTagNumber, setWrongTagNumber] = useState(false)
    
   

    let safe_tag = null
 

    const petTagLookup = (e) => {
        e.preventDefault();

        fetch(`findpet/${petTag}`)
        .then((res) => res.json())
        .then(res => { setPet(res) })      
        

    }

    const petArray = []

   { pet ? pet.map(dog => {
    petArray.push(dog)
   }) : console.log("Pet has not been assigned") }

   const renderDog = petArray.map(dog => {
    { safe_tag=dog.safe_tag_number }
    return ( <>
    <div> 
        <h3> Doggo Info</h3>
        <p>Name: {dog.name}.</p> 
        <p>Age: {dog.age}.</p> 
        <p>Breed: {dog.breed}.</p> 
        <p>Favorite Food: {dog.favorite_food}.</p>
        <button onClick={(e)=>{handleSafeTag(e)}}> Contact the Owner </button>
    </div>
    
    </>
    )
   });


   const renderDogOwner = petArray.map(dog => {
    return (
    <div className="owner-info">
        <h3> Owner Information </h3>
        <p>Name: {dog.owner.name}</p>
        <p> Phone: {dog.owner.phone}</p>
    </div>
    
    )
   });


   const handleSafeTag = (e) => {
    e.preventDefault();
    setToggle(!toggle)   
   }


   const handleOwnerInfo = (e) => {
    e.preventDefault();

    if(safeTagInput == safe_tag) {
        setOwnerInfo(!ownerInfo)
        setWrongTagNumber(false)
    } else {
        setWrongTagNumber(!wrongTagNumber)
    }    
   }


   

    return ( 
 <div>
        <div className="foundapet_form">
            <form className="form">
                <label> Enter the Tag Number - located at
                <input type="text" name='tag_number' placeholder="Enter the Tag Number" onChange={(e)=>setPetTag(e.target.value)} ></input>          
                </label>
                <input type="submit" value="Submit" onClick={(e)=>petTagLookup(e)} />
            </form>
        </div>

        <div> {renderDog} </div>

        <div>
        { toggle ? <form className="form">
                <label> Enter the Safe Tag - located at
                <input type="text" name='safe_tag_number' placeholder="Enter the Safe-Taf" onChange={(e)=>setSafeTagInput(e.target.value)} ></input>          
                </label>
                <input type="submit" value="Submit" onClick={(e)=>{handleOwnerInfo(e)}} />
            </form> : null }
            { ownerInfo ? renderDogOwner : null }
        </div>
        <div>
            { wrongTagNumber ? <div> <h1>Tag Number incorrect. </h1> </div> : null}
        </div>

 </div>
     );
}
 
export default FoundaPet;