import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return ( 
    <div>
        <div className='quote'>
            <p className='text'> 
                    The Humane Society of the United States reports that
                    10 million dogs and cats go missing each year. One
                    in three pets will become lost at some point in 
                    their life. Those are scary statistics.                    
                    
                    LET'S CHANGE IT!!!
            </p>
        </div>
        <Link  to='/createaccount' className='nav_buttons'> Create An Account </Link>
        <Link  to='/foundapet' className='nav_buttons'> Found a Pet? </Link>
    </div>
    );
}
 
export default Home;