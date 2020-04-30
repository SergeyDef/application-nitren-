import {authAPI} from '../api/api';
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) =>{
      switch(action.type){
        case SET_USER_DATA:
        
          return {
          ...state,
          ...action.data,
          isAuth: true
         }

        default:
          return state;
      } 
}

export const setAuthUserData = (userId, email, login, isAuth) =>({
  type: SET_USER_DATA,
  data: {userId, email, login, isAuth}
});

export const getAuthUserData = () =>{
  return (dispatch) =>{
    authAPI.me().then(response =>{
        if (response.data.resultCode === 0) {
          let {id, login,  email} = response.data.data;
          dispatch(setAuthUserData(id, login, email, true));
        }
    });
  }
}

export const logInSite = (email, password, rememberMy) =>{
  return (dispatch) =>{
    authAPI.login(email, password, rememberMy)
    .then(response =>{
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData());
        }
    });
  }
}

export const logout = (email, password, rememberMy) =>{
  return (dispatch) =>{
    authAPI.logout()
    .then(response =>{
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
    });
  }
}

export default authReducer;