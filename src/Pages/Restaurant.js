import React from 'react';
import RestaurantCard from '../Components/restaurantCard';
import {connect} from 'react-redux';
import Toolbar from '../Components/toolbar';

 
class Restaurant extends React.Component{
constructor(props) {
 super(props);
 this.state={
    selectedCuisineIndex:0
}       
}

componentDidMount=(props)=>{
    if(props){
    this.props.onSetCurrentPage(props.match.path);
    }
}

onSelectCuisine =(index)=>{
    this.setState({selectedCuisineIndex:index});
    console.log(index);
}

onSelectRestaurant=(restroIndex)=>{
    var aMenu=this.props.aRestaurant[this.state.selectedCuisineIndex].resturantList[restroIndex].menuList;
    var name=this.props.aRestaurant[this.state.selectedCuisineIndex].resturantList[restroIndex].name;
    this.props.onSetMenu(aMenu,name);
    return this.props.history.push("/menu");
}
    
render(){
    return(
        <div >
            <Toolbar logout={(props)=>{
                this.props.onLogout();
          this.props.history.push("/");
        }} OrderHistory={()=>{
            this.props.history.push("/history");
        }}/>
            <div className="restro-sidebar">
            <ul className="sidebar-List">
                {this.props.aRestaurant.map((restaurant,i) =>(               
                    <li className={this.state.selectedCuisineIndex===i?"select-Cuisine":"cuisine-list"} onClick ={ ()=>{this.onSelectCuisine(i)}}>
                        <h5>{restaurant.cuisine}</h5>
                    </li>                 
                 ))}
            </ul>
            </div>
            <div className="restro-detailspage">
            <div className="row1 component">
            {this.props.aRestaurant[this.state.selectedCuisineIndex].resturantList.map((rest,j)=>( 
                <RestaurantCard restName={rest.name} restroUrl={rest.restroUrl} address={rest.address} selectRestaurant={()=>{this.onSelectRestaurant(j)}}/>           
            )
            )}
            </div>
        </div>
        </div>
        );
    }
    }

    const mapStateToProps= state =>{
        return{
            aRestaurant:state.aRestaurant,
            
        }
    }
                
    const mapDispatchToProps=dispatch =>{
        return{
             onCloseLogin:()=>dispatch({type:'CLOSE_LOGIN_MODAL'}),
             onSetMenu:(aMenu,sSelectedrestaurant)=>dispatch({type:'SET_MENU',value:aMenu,rest:sSelectedrestaurant}),
             onSetCurrentPage:(path)=>dispatch({type:'CURRENT_PAGE',value:path}),
             onLogout:()=>dispatch({type:'LOGGED_OUT'}),
        }
    }
                
    export default connect(mapStateToProps,mapDispatchToProps)(Restaurant);    
