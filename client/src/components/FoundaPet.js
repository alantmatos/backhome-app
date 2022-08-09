import { useState } from "react";
import React from 'react';


const FoundaPet = () => {

    const [ pet, setPet ] = useState('');
    const [ petTag, setPetTag] = useState('');

    const petTagLookup = (e) => {
        console.log(e)

        // make a fetch,get  request for the tag number and return json
    }

    return ( 
        <div className="foundapet_form">
        <form className="form">
            <label> Enter the Tag Number - located at
            <input type="text" name='tag_number' placeholder="Enter the Tag Number" onChange={(e)=>setPetTag(e.target.value)} ></input>
          
            </label>
            <input type="submit" value="Submit" onSubmit={(e)=>petTagLookup(e)} />
        </form>
        </div>
     );
}
 
export default FoundaPet;