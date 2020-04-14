import React from 'react';
import Library from './Library';
import {connect} from 'react-redux';
import {setBook, showInformation, searchBook, textChenge, searchOption} from '../../state/libraryReducer';
import * as axios from 'axios';

class LibraryAPI extends React.Component {

	componentDidMount(){
		axios.get("https://raw.githubusercontent.com/SergeyDef/nitrenJSON-/master/books.json")
		.then(response =>{
			this.props.setBooks(response.data.items);
		});
	}

	render (){
		 return <Library textChenge={this.props.textChenge}
		 searchText={this.props.searchText}
		 searchBooks={this.props.searchBooks}
		 bookCoverLibrarys={this.props.bookCoverLibrarys}
		 showInformations={this.props.showInformations}
		 information={this.props.information}
		 informationBoo={this.props.informationBoo}
		 searchOptions={this.props.searchOptions}
		  />
	}
}

let mapStateToProps = (state) =>{
	return {
		bookCoverLibrarys: state.library.bookCoverLibrary,
		informationBoo: state.library.informationBoo,
		searchText: state.library.searchText
	}
}
let mapDispatchToProps = (dispatch) =>{
	return {
		setBooks: (book) => {
			dispatch(setBook(book));
		},
		showInformations: (bookId) => {
			dispatch(showInformation(bookId));
		},
		textChenge: (newText) => {
			dispatch(textChenge(newText));
		},
		searchOptions: (option) => {
			dispatch(searchOption(option));
		},
		searchBooks: () => {
			dispatch(searchBook());
		},

	}
}

const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(LibraryAPI);

export default LibraryContainer;