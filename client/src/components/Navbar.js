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
                   
            <div className='navbar_container'>
                <div className='navbar_header'>
                    <img className='navbar_img' src={banner} alt='banner'></img>
                    <h1 className='title'>Back Home</h1>         
                </div>

                <div>
                    <h2 className='welcome_msg'> {user ? `Welcome, ${user.name}.` : 'Welcome Back to Home App'} </h2>
                </div>

                <div className='button-container'>
                    <Link  to='/home' className='nav_buttons'> Home </Link>
                    {user ? <Link to='/home' className='nav_buttons' onClick={()=>handleLogout()}> LogOut</Link> : <Link to='/login' className='nav_buttons'> Login</Link>}
                    <Link to='/about' className='nav_buttons'> About</Link>
                    <Link to='/profile' className='nav_buttons'> Profile</Link>
                </div>
            </div>
        
     );
}
 
export default Navbar;



{/* <div className='user_img_container'>
<h2 className='user_img'> {user ? <img src={user.img_url} className="img_size" alt="User Image"></img> : null } </h2>
</div> */}