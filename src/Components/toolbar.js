import React from 'react-dom';import {useState} from 'react';
import {navbar} from '../data';
import {connect} from 'react-redux';
import Navbar from './navbar';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';
function Toolbar(props){

    
    
 return( 
    <header className='ecart-toolbar'>
    <img src="/images/logo.png" className='ecart_logo'/>
    <div className={(props.isLoggedIn || window.location.pathname!=='/')?'ecart_profileIcon':'ecart-hideContent'}>
    <img src="/images/profile.png" className="profile-img"/>
    <h5 className="content-margin">Welcome {props.sLoggedinUseName}</h5>
    <div style={{display: "flex"}}>
    <h6 className="action-css" onClick={props.OrderHistory}>Order History</h6>
    <h6 className="action-css" onClick={props.logout}>logout</h6>
    </div>
    </div>
    <button type='button' className={(props.isLoggedIn || window.location.pathname!=='/')?'ecart-hideContent':"ecart-loginBtn"} onClick={props.onOpenLogin}>Login</button>
    <nav className={window.location.pathname!=='/'?'ecart-hideContent':'ecart-navbar'}>
    {navbar.map((nabarItem,i) =>(  
        <Navbar onSetSelectedItemIndex={()=>{props.onSetSelectedItemIndex(i)}} url={nabarItem.url} title={nabarItem.title} selectItemIndex={props.selectItemIndex} id={i}/>
    ))}
    </nav>
    
    </header>      
    );
 }

const mapStateToProps=state =>{
    return{
        ctr:state.isLoginModalOpen,
        selectItemIndex :state.selectItemIndex,
        isLoggedIn:state.isLoggedIn,
        currentPage:state.currentPage,
        sLoggedinUseName:state.sLoggedinUseName
    }
}

const mapDispatchToProps=dispatch =>{
    return{
        onOpenLogin:()=>dispatch({type:'OPEN_LOGIN_MODAL'}),
        onSetSelectedItemIndex:(i)=>dispatch({type:'SET_SELECTED_INDEX',value:i})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Toolbar);