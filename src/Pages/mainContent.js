import React from 'react-dom';
import {
    Fragment,
    useState
} from 'react';
import {
    navbar
} from '../data';
import {connect} from 'react-redux';
import Slide from '../Components/slide';
import Cities from '../Components/cities';
import About from '../Components/About';
import Contacts from '../Components/contacts';
import Toolbar from '../Components/toolbar';
function Content(props) {
 
    
    const onLogin = (e) => {
        e.preventDefault();
        var userName = e.target.elements.userName.value;
        var password = e.target.elements.password.value;
        var user=[...props.aUsers];
        var aFilter=user.filter(function(obj){
            return (obj.user===userName && obj.password===password);
        })
        for(var i=0;i<user.length;i++){
            if(user[i].user===userName && user[i].password===password){
                var userIndex=i;
            }
        }
        if (aFilter.length===1) {
            props.onCloseLogin();
            props.onLoginSuccess(userName,userIndex);
            return props.history.push("/restaurant");
            // onCheckLogin();
        } else {
            alert('Please enter correct username or password');
        }
    }
    const onClickRegLink = () => {
        props.onCloseLogin();
         props.onRegModalOpen();
    }
    const onRegister = (e) => {
        e.preventDefault();
        var userName = e.target.elements.userName.value;
        var password = e.target.elements.password.value;
        var confirmPassword = e.target.elements.confirmPassword.value;
        if (password === confirmPassword) {
            var object=[...props.aUsers];
            object.push({
                user:userName,
                password:password,
                orderHistory:[]
            })
            props.addNewUser(object)
            props.onRegModalClose();
            
        } else {
            alert('Incorrect password');
        }
    }
    return (
        // <h1>jhjhj</h1>
        <div style = {{height: '100%'}}>
        <Toolbar logout={(props)=>{
          props.history.push("/");
        }}/>
            <div className={props.isLoginModalOpen ? 'ecart-loginPopup' : 'ecart-hideContent'}>
            <div className='ecart-ModalContent'>
            <button onClick={props.onCloseLogin} className='ecart-closeBtn'> X </button>  
            <h6 className='ecart-modalTitle'> Login </h6>    
            <form style={{marginLeft: '25px'}} onSubmit = {onLogin}>
            <label for="userName" className='.ecar-label'> User Name </label>
            <input type="text" name='userName' placeholder="Enter your user name" className='ecart-inputField' required />  
             <label for="password" className='.ecar-label'> Password </label>
            <input type="password" name='password' placeholder="Enter your password" className='ecart-inputField' required />
            <input type="submit" value="Submit" className='ecart-submitBtn'></input>     
             </form>
            <h6 className = 'ecart-registerLink' onClick = {
                onClickRegLink
            }> Do not have account ? Register Now </h6>    
            </div>      
            </div>   
            <div className = {props.isRegModalOpen ? 'ecart-loginPopup' : 'ecart-hideContent'}>
            <div className = 'ecart-registerModalContent'>
            <button onClick = {
                props.onRegModalClose
            }
            className='ecart-closeBtn'> X </button>   
             <h6 className='ecart-modalTitle'> Register </h6>
            <form style={{margin: '25px'}} onSubmit={onRegister}>
            <label for="userName" className='.ecar-label'> User Name </label>
            <input type="text" name='userName' placeholder="Enter your user name" className='ecart-inputField' required />  
            <label for="password" className='.ecar-label'> Password </label>
            <input type="text" name='password' placeholder="Enter password" className='ecart-inputField' required />     
            <label for="confirmPassword" className='.ecar-label'> Confirm Password </label>
            <input type="password" name='confirmPassword' placeholder="Confirm password" className='ecart-inputField' required />   
            <input type="submit" value="Register" className='ecart-submitBtn'></input>
            </form>       
            </div>       
          </div>
        <div id="home">
        <Slide/>
        </div>
        <div id="services">
        <Cities/>
        </div>
        <div id="about">
        <About/>
        </div>
        <div id="contact">
        <Contacts/>
        </div>   
        </div>    
);
}

const mapStateToProps= state =>{
    return{
        isLoginModalOpen:state.isLoginModalOpen,
        isRegModalOpen:state.isRegModalOpen,
        isLoggedIn:state.isLoggedIn,
        aUsers:state.aUsers,
        sLoggedinUseName:state.sLoggedinUseName
        
    }
}
            
const mapDispatchToProps=dispatch =>{
    return{
         onCloseLogin:()=>dispatch({type:'CLOSE_LOGIN_MODAL'}),
         onLoginSuccess:(userName,userIndex)=>dispatch({type:'LOGGED_IN',value:userName,userIndex:userIndex}),
         onSetCurrentPage:(path)=>dispatch({type:'CURRENT_PAGE',value:path}),
         onRegModalOpen:()=>dispatch({type:'OPEN_REG_MODAL'}),
         onRegModalClose:()=>dispatch({type:'CLOSE_REG_MODAL'}),
         addNewUser:(obj)=>dispatch({type:'ADD_NEW_USER',value:obj}),
    }
}
            
export default connect(mapStateToProps,mapDispatchToProps)(Content);