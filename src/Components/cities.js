import React from 'react-dom';
import {useState} from 'react';

function Cities(){ 
 return( 
    <div>
        <h5>Cities we deliver to</h5>
        <table className="table">
            <tr>
                <td>Delhi NCR</td>
                <td>Kolkata</td>
                <td>Mumbai</td>
                <td>Bengaluru</td>
            </tr>
            <tr>
                <td>Pune</td>
                <td>Hyderabad</td>
                <td>Chennai</td>
                <td>Lucknow</td>
            </tr>
            <tr>
                <td>Kochi</td>
                <td>Jaipur</td>
                <td>Ahmedabad</td>
                <td>Leh</td>
            </tr>
            <tr>
                <td>Kota</td>
                <td>Rourkela</td>
                <td>Bhubaneswar</td>
                <td>Koraput</td>
            </tr>
            <tr>
                <td>nagpur</td>
                <td>Surat</td>
                <td>Madurai</td>
                <td>Raipur</td>
            </tr>
        </table>
    </div>
 );
}
export default Cities;