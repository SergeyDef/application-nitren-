import {combineReducers, createStore} from "redux";
import userPostReducer from './userProfileReducer';
import dialogsReducer from './dialogsReducer';
import protoPostReducer from './protoPostReducer';
import libraryReducer from './libraryReducer';
import subscribersReducer from './subscribersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  userProfile: userPostReducer,
  dialogs: dialogsReducer,
  photoPost: protoPostReducer,
  library: libraryReducer,
  subscribers: subscribersReducer,
  auth: authReducer

});

let store = createStore(reducers);

window.store = store;

export default store;