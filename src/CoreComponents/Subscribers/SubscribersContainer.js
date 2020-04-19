import React from 'react';
import {connect} from 'react-redux';
import {inFriend, notFriend, setFriend, setCurrentPage, toggoleIsFetching, totalUsersCount} from '../../state/subscribersReducer';
import * as axios from 'axios';
import Subscribers from './Subscribers';
import preloader from '../../assec/img/preloader.svg'
import s from './subscribers.module.css';

class SubscribersAPI extends React.Component {
	
	componentDidMount(){
		this.props.toggoleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
		.then(response =>{
				this.props.setFriend(response.data.items);
				this.props.totalUsersCount(response.data.totalCount);
			});
		this.props.toggoleIsFetching(false);
	}
	onPageChanged = (pageNumber) =>{
		this.props.setCurrentPage(pageNumber);
		this.props.toggoleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
			.then(response =>{
				this.props.setFriend(response.data.items);
			});
		this.props.toggoleIsFetching(false);
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
				  totalUsersCount={this.totalUsersCount}
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
		setFriend,
		setCurrentPage,
		toggoleIsFetching,
		totalUsersCount
		})(SubscribersAPI);

export default SubscribersContainer;
