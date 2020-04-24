import {applyMiddleware, combineReducers, createStore} from "redux";
import userPostReducer from './userProfileReducer';
import dialogsReducer from './dialogsReducer';
import protoPostReducer from './protoPostReducer';
import libraryReducer from './libraryReducer';
import subscribersReducer from './subscribersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
  userProfile: userPostReducer,
  dialogs: dialogsReducer,
  photoPost: protoPostReducer,
  library: libraryReducer,
  subscribers: subscribersReducer,
  auth: authReducer,
  form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;