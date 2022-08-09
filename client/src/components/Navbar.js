import React from 'react';
import banner from '../Assets/banner.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = ({user,setUser}) => {

    let navigate = useNavigate();

    const handleLogout = () => {
        fetch('/logout',{
            method: 'DELETE'
        })
        .then((res) => {
            if (res.ok){
                setUser(null)
            }
        })
        navigate('/home')
    };


    return ( 
        <div>            
            <div className='navbar'>
                <div   >
                    <img className='banner' src={banner} alt='banner'></img>         
                </div>
                <div>
                    <h1 className='title'>Dog Project - navbar</h1>
                </div>
                <div>
                <h2 className='welcome_msg'> {user ? `Welcome, ${user.name}.` : ''} </h2>
                </div>

                <div>
                    <Link  to='/home' className='nav_buttons'> Home </Link>
                    {user ? <Link to='/home' className='nav_buttons' onClick={()=>handleLogout()}> LogOut</Link> : <Link to='/login' className='nav_buttons'> Login</Link>}
                    <Link to='/about' className='nav_buttons'> About</Link>
                </div>
            </div>
        </div> 
     );
}
 
export default Navbar;