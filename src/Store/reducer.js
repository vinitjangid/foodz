
import {OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  SET_SELECTED_INDEX,
  LOGGED_IN,SET_MENU,
  CURRENT_PAGE,
  OPEN_REG_MODAL,
  CLOSE_REG_MODAL,
  OPEN_CONFIRM_POPUP,
  CLOSE_CONFIRM_POPUP,
  ADD_NEW_USER,
  LOGGED_OUT} from '../actions';
import {aRestaurant} from '../data';
import {aOrderHistory,aUsers} from '../data';

const initialState={
  isLoginModalOpen:false,
  selectItemIndex :0,
  isRegModalOpen:false,
  aRestaurant:aRestaurant,
  isLoggedIn:false,
  aMenu:aRestaurant[0].resturantList[0].menuList,
  isOrderConfirmed:false,
  restaurantName:"",
  aOrderHistory:aOrderHistory,
  sLoggedinUseName:"krishi",
  aUsers:aUsers,
  sSelectedrestaurant:"",
  userIndex:0
}

const reducer=(state=initialState , action)=>{
    if(action.type===OPEN_LOGIN_MODAL){
        return {
          ...state,
          isLoginModalOpen:true
        }  
      }
  
      if(action.type===CLOSE_LOGIN_MODAL){
          return {
            ...state,
            isLoginModalOpen:false
          }  
        }

      if(action.type===SET_SELECTED_INDEX){
          return {
            ...state,
            selectItemIndex :action.value
          }  
      }
      if(action.type===LOGGED_IN){
        return {
          ...state,
          isLoggedIn:true,
          sLoggedinUseName:action.value,
          userIndex:action.userIndex
        }  
    }
    if(action.type===LOGGED_OUT){
      return {
        ...state,
        isLoggedIn:false
      }  
  }
    if(action.type===SET_MENU){
      return {
        ...state,
        aMenu:action.value,
        sSelectedrestaurant:action.rest
      }  
      
  }
  if(action.type===CURRENT_PAGE){
    return {
      ...state,
      aMenu:action.value
    }  
  }
  if(action.type===OPEN_REG_MODAL){
    return {
      ...state,
      isRegModalOpen:true
    }  
  }
  if(action.type===CLOSE_REG_MODAL){
    return {
      ...state,
      isRegModalOpen:false
    }  
  }
  if(action.type===OPEN_CONFIRM_POPUP){
    return {
      ...state,
      isOrderConfirmed:true,
      aUsers:action.value

    }  
  }
  if(action.type===CLOSE_CONFIRM_POPUP){
    return {
      ...state,
      isOrderConfirmed:false
    }  
  }
  if(action.type===ADD_NEW_USER){
    return {
      ...state,
      aUsers:action.value
    }
    
  }
  return state;
}

export default reducer;