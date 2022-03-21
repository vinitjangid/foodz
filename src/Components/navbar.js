import React from 'react-dom';
import {useState} from 'react';

function Navbar(props){ 
 return(       
    <div>
        <a href={props.url} className='ecart-navbarTitle' onClick={()=>{
            props.onSetSelectedItemIndex(props.id);
        }}>{props.title}</a>
        <hr className={(props.selectItemIndex === props.id) ? 'ecart-navbarUnderline':'ecart-hideContent'}></hr>
    </div>   
 );
}
export default Navbar;