// const REQUEST_RECEIVED = 'REQUEST-RECEIVED';
import {grtUsers} from '../api/api.js';
const IN_FRIENDS = 'IN-FRIENDS';
const NOT_FRIENDS = 'NOT-FRIENDS';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGOLE_IS_FETCHING = 'TOGGOLE-IS-FETCHING';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const ADD_PAGES = 'ADD-PAGES';
const REDUCE_PAGES = 'REDUCE-PAGES';
const PAGES_IN_CURRENT_LEFT = 'PAGES-IN-CURRENT-LEFT';

let subscribers = {
	 myFriendsData:[],
	 pageSize: 5,
	 totalUsersCounts: 0,
	 currentPage: 1,
	 isFetching: true,
	 pagesLeft: 0,
	 pagesRight: 10
}

const subscribersReducer = (state=subscribers, action) =>{
	switch(action.type){
		case IN_FRIENDS:
		return {
			...state,
			myFriendsData: state.myFriendsData.map( u => {
				if (u.id === action.userId){
					return {...u, folloved: true}
				}
				return u;
			})
		}
		case NOT_FRIENDS:
		return {
			...state,
			myFriendsData: state.myFriendsData.map( u =>{
				if (u.id === action.userId){
					return {...u, folloved: false}
				}
				return u;
			})
		} 
		case SET_FRIENDS: 
		{
			return { ...state, myFriendsData: action.users }
		}
		case SET_CURRENT_PAGE:
		{
			return {...state, currentPage: action.currentPage }
		}
		case TOGGOLE_IS_FETCHING:
		{
			return { ...state, isFetching: action.isFetching }
		}
		case TOTAL_USERS_COUNT:
		{
			return { ...state, totalUsersCounts: action.totalCount }
		}
		// 	let copy = {...state};
		// 	copy.totalUsersCounts = action.totalCount;
		// 	copy.totalUsersCounts > 10 ? 
		// 	copy.pagesRight = 10 :
		// 	copy.pagesRight = action.totalCount;
		// return copy
		case ADD_PAGES:
		let stateCopy = {...state};
            stateCopy.pagesLeft = action.pageLeft;
            stateCopy.pagesRight = action.pageRight;
		return stateCopy
		// case PAGES_IN_CURRENT_LEFT:
		// {
		// 	return {...state, currentPage: action.pageNumber }
		// }
		default:
		return state;
	}	
}

export const inFriend = (userId) =>({
	type: IN_FRIENDS, userId
});

export const notFriend = (userId) =>({
	type: NOT_FRIENDS, userId
});
export const setFriend = (users) =>({
	type: SET_FRIENDS, users
});
export const setCurrentPage = (currentPage) =>({
	type: SET_CURRENT_PAGE, currentPage
});
export const toggoleIsFetching = (isFetching) =>({
	type: TOGGOLE_IS_FETCHING, isFetching
});
export const totalUsersCount = (totalCount) =>({
	type: TOTAL_USERS_COUNT, totalCount
});
export const addPages = (pageLeft, pageRight) => ({
	type: ADD_PAGES, pageLeft, pageRight
});
// export const pagesInCurrentLeft = (pageNumber) => ({
// 	type: PAGES_IN_CURRENT_LEFT, pageNumber
// });
export const getSubscribersCreator = (currentPage, pageSize) =>{
	return (dispatch) =>{

		dispatch(toggoleIsFetching(true));

		grtUsers(currentPage, pageSize).then(data =>{
				dispatch(setFriend(data.items));
				dispatch(totalUsersCount(data.totalCount));
			});
		dispatch(toggoleIsFetching(false));
	}
}

export default subscribersReducer; 