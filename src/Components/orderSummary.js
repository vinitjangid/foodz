import React from 'react-dom';
import {useState} from 'react';

function OrderSummary(props){ 
 return(     
    <div className={props.isOrderConfirmed?'ecart-loginPopup':'ecart-hideContent'}>
    <div className='ecart-ModalContent'>
            <div className="order-confirmed">
                Your order is confirmed    
            </div>
            <h5>Order Summary</h5>
            <table className="table">
            <tr>
                    <td>Restaurant name:</td>
                    <td>{props.sSelectedrestaurant}</td>
            </tr>
            <tr>
                    <td>Address:</td>
                    <td>{props.address}</td>
            </tr>
            <tr>
                    <td>Order id:</td>
                    <td>{props.orderId}</td>
            </tr>
            <tr>
                    <td>Total payment:</td>
                    <td>{props.total}</td>
            </tr>
            </table>
            <button onClick={props.closeOrderSummary} className="addBtn btn btn-success btn-sm">CLOSE</button>
            </div>      
    </div>
 );
}
export default OrderSummary;