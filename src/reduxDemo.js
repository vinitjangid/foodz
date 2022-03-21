const redux=require('redux');
const createStore=redux.createStore;

const initialState={
    isLoginModalOpen:false
}

const rootReducer=(state , action)=>{
    if(action.type==="OPEN_LOGIN_MODAL"){
      return {
        ...state,
        isLoginModalOpen:true
      }  
    }

    if(action.type==="CLOSE_LOGIN_MODAL"){
        return {
          ...state,
          isLoginModalOpen:false
        }  
      }
}

const store=createStore(rootReducer);

store.dispatch({type:'OPEN_LOGIN_MODAL'})
store.dispatch({type:'CLOSE_LOGIN_MODAL'})