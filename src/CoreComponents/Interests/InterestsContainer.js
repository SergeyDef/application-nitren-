import React from 'react';
import Interests from './Interests';
import {connect} from 'react-redux';

let mapStateToProps = () =>{
  return {

  }
}
let mapDispatchToProps = () =>{
  return {
    
  }
}

const InterestsContainer = connect(mapStateToProps, mapDispatchToProps)(Interests);

export default InterestsContainer;
