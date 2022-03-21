import React from 'react'
import {connect} from 'react-redux';
import MenuCard from '../Components/menuCard';
import ShowCart from '../Components/cart';
import OrderSummary from '../Components/orderSummary';
import Toolbar from '../Components/toolbar';
class Menu extends React.Component{
    constructor(props) {
     super(props);
     this.state={
        cart:[],
        total:0,
        quantity:1,
        popup:true,
        address:"",
        showCart:false,
        orderId:"",
        isLoading:true
    }      
    }
    increase(e,i){
        var quantity=document.getElementById(i).value;
        quantity++;
        document.getElementById(i).value=quantity;
    }

    decrease(e,i){
        var quantity=document.getElementById(i).value;
        if(quantity>1){
            quantity--;

        }
        document.getElementById(i).value=quantity;
    }
    addToCart(e,i){
        var cart=this.state.cart;
        var total=this.state.total;
        var menuName=[];
        cart.forEach(function(obj){
            menuName.push(obj.name);
        })
        if(cart===[]){
          this.card(e,i);
        // }else if(card[i].name===e.props.list[i].menuName){
    
        }
        else if(menuName.includes(this.props.aMenu[i].menuName)){
            alert("Already added to cart");
        }else{
            this.card(e,i);
        }
        }
    card(e,i){
            var cart=this.state.cart;
            var total=this.state.total;
            let tot={
                "name":this.props.aMenu[i].menuName,
                "price":this.props.aMenu[i].price,
                "quantity":document.getElementById(i).value
            }
             cart.push(tot);
            this.setState({cart:cart});
            console.log(cart);
            total=0;
            for(var i=0;i<cart.length;i++){
                 total=parseInt(total)+(parseInt(cart[i].price)*parseInt(cart[i].quantity));
            }
            this.setState({total:total});
         }
    clearCart(){
        this.setState({cart:[]});
        this.setState({total:0});
    }
    onShowCart(){
        var value=this.state.showCart
        this.setState({showCart:!value});
    }
    confirmOrder(){
        var that=this;
        var address=document.getElementById("addressId").value;
        if(address){
        this.setState({address:address});
        this.setState({isLoading:false});
        var orderId="Order" + Math.floor(100000 + Math.random() * 900000);
        this.setState({orderId:orderId});
        var index=this.props.userIndex;
        var user=[...this.props.aUser];
        var newOrder=user[index].orderHistory;
        var obj={
            date:new Date().toDateString(),        
            restaurantname:this.props.sSelectedrestaurant,        
            orderId:orderId ,
            items:this.state.cart[0].name,
            total:this.state.total
        }
        newOrder.push(obj);
        user[this.props.userIndex].orderHistory=newOrder;
        setTimeout(function(e){
            that.setState({isLoading:true});
            that.props.onConfirmOrder(user);

        },2000);
        
        }else{
            alert("Please enter delivery address");
        }
    }
    render(){
        return( 
            <div>
                <Toolbar logout={(props)=>{
                    this.props.onLogout();
          this.props.history.push("/");
        }} OrderHistory={()=>{
            this.props.history.push("/history");
        }}/>
            <div className="row1 component">
                {this.props.aMenu.map((menu,j)=>(              
                    <MenuCard menuName={menu.menuName} menuUrl={menu.menuUrl} price={menu.price} addToCart={(e)=>this.addToCart(this,j)} quantity={this.state.quantity} increase={(e)=>this.increase(this,j)} decrease={(e)=>this.decrease(this,j)} id={j}/>
                )
                )}
            </div>
          
            <ShowCart onShowCart={()=>{this.onShowCart()}} cart={this.state.cart} confirmOrder={()=>{this.confirmOrder()}} total={this.state.total} clearCart={()=>this.clearCart()}/>
            <OrderSummary isOrderConfirmed={this.props.isOrderConfirmed} closeOrderSummary={this.props.onCloseOrderSummary} sSelectedrestaurant={this.props.sSelectedrestaurant} total={this.state.total} orderId={this.state.orderId} address={this.state.address}/>
            <div className="ecart-loginPopup" hidden={this.state.isLoading}>
            <img src="/images/loading.gif" className="loading" />
            </div>
            </div>
            );
    }
    
    }
    const mapStateToProps= state =>{
        return{
            aMenu:state.aMenu,
            isOrderConfirmed:state.isOrderConfirmed,
            sSelectedrestaurant:state.sSelectedrestaurant,
            // aOrderHistory:state.aUsers[state.userIndex].orderHistory,
            aUser:state.aUsers,
            userIndex:state.userIndex
        }
    }
                
    const mapDispatchToProps=dispatch =>{
        return{
             onCloseLogin:()=>dispatch({type:'CLOSE_LOGIN_MODAL'}),
             onSetCurrentPage:(path)=>dispatch({type:'CURRENT_PAGE',value:path}),
             onConfirmOrder:(userList)=>dispatch({type:'OPEN_CONFIRM_POPUP',value:userList}),
             onCloseOrderSummary:()=>dispatch({type:'CLOSE_CONFIRM_POPUP'}),
             onLogout:()=>dispatch({type:'LOGGED_OUT'}),
        }
    }   
    
export default connect(mapStateToProps,mapDispatchToProps)(Menu);     
