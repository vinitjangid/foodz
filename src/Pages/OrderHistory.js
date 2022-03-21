import React from 'react';
import RestaurantCard from '../Components/restaurantCard';
import {connect} from 'react-redux';
import Toolbar from '../Components/toolbar';
 
class OrderHistory extends React.Component{
constructor(props) {
 super(props);
      
}

    
render(){
    return(
        <div >
            <Toolbar logout={()=>{
                this.props.onLogout();
          this.props.history.push("/");
        }}  OrderHistory={()=>{
            this.props.history.push("/history");
        }}/>
        <div style={{height:'37rem'}}>
           <table className="table">
                            <tr>
                                <td>Date</td>
                                <td>Restaurant Name</td>
                                <td>Order id</td>
                                <td>Orders</td>
                                <td>Total</td>
                            </tr>
                        {this.props.aUsers[this.props.userIndex].orderHistory.map(tblList=>{
                            return(
                             <tr>
                                <td>{tblList.date}</td>
                                <td>{tblList.restaurantname}</td>
                                <td>{tblList.orderId}</td>
                                <td>{tblList.items}</td>
                                <td>{tblList.total}</td>
                             </tr>
                            )                       
                        }                        
                        )}
                        
                    </table>
                    </div>
        </div>
        );
    }
    }

    const mapStateToProps= state =>{
        return{
            aUsers:state.aUsers,
            userIndex:state.userIndex
            
        }
    }
                
    const mapDispatchToProps=dispatch =>{
        return{
             onCloseLogin:()=>dispatch({type:'CLOSE_LOGIN_MODAL'}),
             onLogout:()=>dispatch({type:'LOGGED_OUT'}),
        }
    }
                
    export default connect(mapStateToProps,mapDispatchToProps)(OrderHistory);    
