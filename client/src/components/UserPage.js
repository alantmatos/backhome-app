import React from 'react';
//import { useNavigate, useParams } from "react-router-dom";


const UserPage = ({user}) => {
console.log(user)
    //let navigate = useNavigate();

    return ( 
        <div className='user_info'>
            <div>
                <h1>{user ? `Hi, ${user.name}.` : ''}</h1> 
                <p> {user ? `Phone Number: ${user.phone}.` : ''}</p>
                <p> {user ? `E-mail: ${user.e_mail}.` : ''}</p>
                <p> {user ? `City_State ${user.city_state}.` : ''}</p> 
            </div>
        </div>
     );
}
 
export default UserPage;