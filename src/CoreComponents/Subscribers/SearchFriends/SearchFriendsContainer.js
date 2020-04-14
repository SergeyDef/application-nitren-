import React from 'react';
import {connect} from 'react-redux';
import SearchFriends from './SearchFriends';
import {textSearch} from '../../../state/subscribersReducer';

debugger;
let mapStateToProps = (state) =>{
	return{

	}
}

let mapDispatchToProps = (dispatch) =>{
	return{
		textSearch: (text) => {
			dispatch(textSearch(text));
		}
	}
}

const SearchFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFriends);

export default SearchFriendsContainer;
