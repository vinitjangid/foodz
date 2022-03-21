import React from 'react-dom';

function RestaurantCard(props){ 
 return(     
    <div className="col-sm-4 rest-Box" onClick={props.selectRestaurant}>
        <div>
        <img src={props.restroUrl} alt="image" className="Restaurant-Img"/>
        </div>
        {/* <p>restaurant</p> */}
         <h5>{props.restName}</h5>
         {/* <p>{props.address}</p> */}
    </div>
 );
}
export default RestaurantCard;