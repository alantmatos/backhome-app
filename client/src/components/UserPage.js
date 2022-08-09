import React from 'react';
import { Link } from "react-router-dom";


const UserPage = ({user}) => {

    return ( 
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
     );
}
 
export default UserPage;