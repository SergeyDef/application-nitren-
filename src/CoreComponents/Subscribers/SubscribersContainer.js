import React from 'react';
import {connect} from 'react-redux';
import {inFriend, 
		notFriend, 
		setCurrentPage, 
		getSubscribersCreator} from '../../state/subscribersReducer';
import Subscribers from './Subscribers';
import preloader from '../../assec/img/preloader.svg'
import s from './subscribers.module.css';
import {grtUsers} from '../../api/api';

class SubscribersAPI extends React.Component {
	
	componentDidMount(){
		this.props.getSubscribersCreator(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) =>{
		this.props.setCurrentPage(pageNumber);
		this.props.getSubscribersCreator(pageNumber, this.props.pageSize);
		}

	render (){
		  return <>
		  { this.props.isFetching ? <div className={s.IsFetching}><img src={preloader} className={s.IsFetching_img} /></div> : null }
		   <Subscribers myFriendsData={this.props.myFriendsData}
				  notFriend={this.props.notFriend}
				  inFriend={this.props.inFriend}
				  totalUsersCounts={this.props.totalUsersCounts}
				  currentPage={this.props.currentPage}
				  pageSize = {this.props.pageSize}
				  onPageChanged={this.onPageChanged}
		  />
		</>
	}
}

let mapStateToProps = (state) =>{
	debugger;
	return {
		myFriendsData: state.subscribers.myFriendsData,
		pageSize: state.subscribers.pageSize,
		totalUsersCounts: state.subscribers.totalUsersCounts,
		currentPage: state.subscribers.currentPage,
		isFetching: state.subscribers.isFetching
	}
}

// let mapDispatchToProps = (dispatch) =>{
// 	return {
// 		inFriends: (userId) => {
// 			dispatch(inFriend(userId));
// 		},
// 		notFriends: (userId) => {
// 			dispatch(notFriend(userId));
// 		},
// 		setFriends: (users) => {
// 			dispatch(setFriend(users));
// 		},
// 		setCurrentPage: (pegeNumber) => {
// 			dispatch(setCurrentPageAC(pegeNumber));
// 		},
// 		setleIsFetching: (isFetching) => {
// 			dispatch(toggoleIsFetching(isFetching));
// 		}
// 	}
//}onPageChanged


const SubscribersContainer = connect(mapStateToProps, {
		inFriend,
		notFriend,
		setCurrentPage,
		getSubscribersCreator
		})(SubscribersAPI);

export default SubscribersContainer;
