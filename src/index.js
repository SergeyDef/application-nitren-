import state, {subscribe} from './state/redux-store';
import store from './state/redux-store';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


// import {drawingTreeReact} from './render';

let drawingTreeReact = (state) =>{
  ReactDOM.render(
  <BrowserRouter>
  		<Provider store={store} >
	      	<App 
	      	dispatch = {store.dispatch.bind(store)}
	      	state={store.getState()}
	      	/>
         </Provider>
  </BrowserRouter>, document.getElementById('root'));
}

drawingTreeReact(store.getState());

store.subscribe(drawingTreeReact);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
