import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';
import s from '../photoPost.module.scss';

let mapStateToProps = (state) =>{
	return {
		comment: state.photoPost.comments
	}
}
let mapDispatchToProps = () =>{
	return {
		
	}
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;
