import React from 'react';
import {Route} from 'react-router-dom';
import HeaderContainer from './CoreComponents/Header/HeaderContainer';
import Nav from './CoreComponents/Nav/Nav';
import PhotoPost from './CoreComponents/PhotoPost/PhotoPost';
// import Futer from './CoreComponents/Futer/Futer';
import DialogsContainer from './CoreComponents/Dialogs/DialogsContainer';
import LibraryContainer from './CoreComponents/Library/LibraryContainer';
import Music from './CoreComponents/Music/Music';
import InterestsContainer from './CoreComponents/Interests/InterestsContainer';
import UserProfileContainer from './CoreComponents/UserProfile/UserProfileContainer';
import SubscribersContainer from './CoreComponents/Subscribers/SubscribersContainer';
import LoginContainer from './CoreComponents/Login/LoginContainer';
import RegistrationContainer from './CoreComponents/Registration/RegistrationContainer';
import './App.css';


const App = (props) =>{

  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/userProfile'
            render={ () => <UserProfileContainer/>} />
          <Route path='/library' 
            render={ () => <LibraryContainer />}
          />
          <Route path='/interests' 
            render={ () => <InterestsContainer />}
          />
          <Route path='/music' 
            render={ () => <Music />}
          />
        	<Route path='/dialogs' 
            render={ () => <DialogsContainer />} />
          <Route path='/photoPost' 
            render={ () => <PhotoPost/>} />
          
          <Route path='/subscribers' 
            render={ () => <SubscribersContainer />} />
          <Route path='/login'
            render={ () => <LoginContainer/> } />
          <Route path='/registration'
            render={ () => <RegistrationContainer/> } />
        </div>
      </div>
    );
}

export default App;
