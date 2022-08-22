import React from 'react';
import banner from '../Assets/banner.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = ({ user, setUser }) => {

    let navigate = useNavigate();

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.ok) {
                    setUser(null)
                }
            })
        navigate('/home')
    };



    return (

        <div className='navbar_container'>

<div className='user_container'>

<div className='user_card'>
    <div className='user_header'>

        <div className='user_img'>
            {user ? <img src={user.img_url} className="img_size" alt="User Image"></img> : null}
        </div>

        <div className='user_name'>
            <h1>{user ? `Hi, ${user.name}.` : null}</h1>
        </div>

    </div>



    <div className='user_info'>
        <p> {user ? `Phone Number: ${user.phone}.` : ''}</p>
        <p> {user ? `E-mail: ${user.e_mail}.` : ''}</p>
        <p> {user ? `City_State ${user.city_state}.` : ''}</p>

{user ?         <div className='user_btn'>
        <Link to='/editprofile' className='nav_buttons'> Edit My Profile</Link>
        <Link to='/addapet' className='nav_buttons'> Add A Pet</Link>
    </div> : "" }

    </div>



</div>




</div>






        
            <div className='title_container'>
            <img className='navbar_img' src={banner} alt='banner'></img>
                <h1 className='title'>Back Home</h1>
                
            </div>
            {/* 
                <div>
                    <h2 className='welcome_msg'> {user ? `Welcome, ${user.name}.` : 'Welcome Back to Home App'} </h2>
                </div> */}

            {/* <div className='button-container'>
                    <Link  to='/home' className='nav_buttons'> Home </Link>
                    {user ? <Link to='/home' className='nav_buttons' onClick={()=>handleLogout()}> LogOut</Link> : <Link to='/login' className='nav_buttons'> Login</Link>}
                    <Link to='/about' className='nav_buttons'> About</Link>
                    <Link to='/profile' className='nav_buttons'> Profile</Link>
                </div> */}
            <ul className='nav_ul'>
                <li>
                    <Link to='/home' className='nav_buttons'> Home </Link>
                </li>

                <li>
                    {user ? <Link to='/home' className='nav_buttons' onClick={() => handleLogout()}> LogOut</Link> : <Link to='/login' className='nav_buttons'> Login</Link>}
                </li>

                <li>
                    <Link to='/about' className='nav_buttons'> About</Link>
                </li>

                <li>
                    <Link to='/profile' className='nav_buttons'> Profile</Link>
                </li>
            </ul>




        </div>

    );
}

export default Navbar;



{/* <div className='user_img_container'>
<h2 className='user_img'> {user ? <img src={user.img_url} className="img_size" alt="User Image"></img> : null } </h2>
</div> */}