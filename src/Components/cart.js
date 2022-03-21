import React from 'react-dom';
import Popup from "reactjs-popup";

function ShowCart(props){ 


 return( 
     
       
    <Popup trigger={<img src="/images/cart.gif" className="shwCartBtn"></img>} modal>
              {close => (
                  <div className="ecart-loginPopup">
                  <div className="cartModal">
                      <a className="close" onClick={()=>{close();
                        
                    }}>
                                  &times;
                        </a>
                  <h1 className="header"> Cart </h1>
                  <div className="content">
                    <table className="table">
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                             </tr>
                        {props.cart.map(tblList=>{
                            return(
                             <tr>
                                <td>{tblList.name}</td>
                                <td>{tblList.price}</td>
                                <td>{tblList.quantity}</td>
                             </tr>
                            )                       
                        }                        
                        )}
                        <tr>
                        <td>Total:<b>{props.total}</b></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </table>
                    
                </div>
                <input type="text" name='text' placeholder="Enter Address" className='ecart-inputField' required id="addressId"/>
                <button onClick={()=>{
                    
                    close();
                    var names="";   
                    
                    if(props.cart.length===0) {
                        alert("Cart is empty");
                    }else{
                        {props.confirmOrder()}; 
                        
                    
                }       
                               
            }             
            } className="orderNowBtn btn btn-success btn-sm">Order Now</button>  
            <button onClick={()=>{
                close();              
                {props.clearCart()};
            }} className="clrcartBtn btn btn-warning btn-sm" >Clear Cart</button>         
                </div>
               </div>
              )}
             
    </Popup>
    
 );
}
export default ShowCart;