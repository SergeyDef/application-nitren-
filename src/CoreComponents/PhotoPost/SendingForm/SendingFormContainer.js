import React from 'react';
import s from './SendingForm.module.css';
import {newCommentsPhotoCreator, addCommentsPhotoCreator} from '../../../state/protoPostReducer';
import SendingForm from './SendingForm';
import {connect} from 'react-redux';

// const SendingFormContainer = (props) =>{

//   let makePublish = () =>{
//     props.dispatch(addCommentsPhotoCreator());
//   }
//   let textNewComment = (text) =>{
//     props.dispatch(newCommentsPhotoCreator(text));
//   }
//   return <SendingForm textNewComment = {textNewComment}
//   makePublish = {makePublish}
//    />
// }

let mapStateToProps = () =>{
  return {

  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
      makePublish: () =>{
        dispatch(addCommentsPhotoCreator());
      },
      textNewComment: (text) =>{
        dispatch(newCommentsPhotoCreator(text));
      }
  }
}

const SendingFormContainer = connect(mapStateToProps, mapDispatchToProps)(SendingForm);

export default SendingFormContainer; 
