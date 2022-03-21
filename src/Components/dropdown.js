import React from 'react-dom';
import {useState} from 'react';

function Dropdown(props){ 
    const onSelectFromDropdown=(url)=>{
        // return props.history.push(url);
        // console.log(url)
      }
 return(     
    <div className="dropdown-css">
        <ul>
           <li onClick={()=>{onSelectFromDropdown("/history")}}>Order History</li> 
           <li onClick={()=>{onSelectFromDropdown("/")}}>Logout</li>
        </ul>
    </div>
 );
}
export default Dropdown;