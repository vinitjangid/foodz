import React from 'react-dom';

function MenuCard(props){ 
 return(     
    <div className="col-sm-3 restaurant-Box" >
        <div>
            <img src={props.menuUrl} alt="image" className="Restaurant-Img"/>
        </div>
         <p>{props.menuName}</p>
         <h6>Rs.{props.price}</h6>
         <div className="qntyDiv">
         <button onClick={props.decrease}>-</button>
         <span></span>
         <input type="number" className="qntyInput" readonly value="1" id={props.id}/>
         <span></span><button onClick={props.increase}>+</button>
         </div>
        <button className="addBtn btn btn-success btn-sm" onClick={props.addToCart}>Add</button>
    </div>
 );
}
export default MenuCard;