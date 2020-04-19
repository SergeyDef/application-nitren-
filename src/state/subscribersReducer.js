// const REQUEST_RECEIVED = 'REQUEST-RECEIVED';
const IN_FRIENDS = 'IN-FRIENDS';
const NOT_FRIENDS = 'NOT-FRIENDS';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGOLE_IS_FETCHING = 'TOGGOLE-IS-FETCHING';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';

let subscribers = {
	 myFriendsData:[],
	 pageSize: 100,
	 totalUsersCounts: 0,
	 currentPage: 1,
	 isFetching: true
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
})


export default subscribersReducer; 
// const subscribersReducer = (state=subscribers, action) =>{
	
// 	if(action.type === REQUEST_RECEIVED){
// 		let  array_subscribers = subscribers.myFriendsData;
// 		 array_subscribers.forEach((item) => {
// 		 	let nameFriend = item.nameFriend;
// 		 	if (nameFriend === action.resultSearch) {
// 		 		item.display = "block";
// 		 	} else if (nameFriend != action.resultSearch){
// 		 		item.display = "none";
// 		 	}
// 		 });
// 		// alert(action.resultSearch + " " + "мы тут!");
// 	}
//   return state;
// }

// export const textSearch = (text) =>({
// 	type: REQUEST_RECEIVED,
// 	resultSearch: text
// });