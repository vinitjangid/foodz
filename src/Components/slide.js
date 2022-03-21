import React from 'react-dom';
import {useState} from 'react';
import {aSlideImages} from '../data';

function Slide(props){ 

    var count=0;
    const previousPic=()=>{
		if(count>0){
			count--;
			document.getElementById("PIC").src=aSlideImages[count];
			}
		}
	const nextPic=()=>{
		if(count< aSlideImages.length-1){
            count++;
            if(document.getElementById("PIC")){
            document.getElementById("PIC").src=aSlideImages[count];
            }
        }else{
            if(window.location.pathname==='/'){
                count=0;
                document.getElementById("PIC").src=aSlideImages[count];
            }
            }
        }
    const autoChange=()=>{
        if(window.location.pathname==='/'){
        setTimeout(function(){
            nextPic();
            autoChange();
        },4000);
    }
    };  
    autoChange();
		
 return(     
    <div className="slide-div">
	<table className="slide-table">
	<tr>
	<td><button  onClick={previousPic}>&#10094;</button></td>
	<td><img src="/images/BG.jpg" id="PIC" className="slide-img"/></td>
	<td><button  onClick={nextPic}>&#10095;</button></td>
	</tr>
	</table>
	</div>
	
 );
}
export default Slide;