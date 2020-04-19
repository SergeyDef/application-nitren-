import React from 'react';
import Library from './Library';
import {connect} from 'react-redux';
import {setBook, 
	showInformation, 
	searchBook, 
	textChenge, 
	searchOption, 
	removalInformation,
	libraryUpdate,
    librarySearchIndicator} from '../../state/libraryReducer';
import * as axios from 'axios';

class LibraryAPI extends React.Component {

	componentDidMount(){
		axios.get("https://raw.githubusercontent.com/SergeyDef/nitrenJSON-/master/books.json")
		.then(response =>{
			this.props.setBooks(response.data.items);
		});
	}

	libraryUpdateFan = () => {
		axios.get("https://raw.githubusercontent.com/SergeyDef/nitrenJSON-/master/books.json")
		.then(response =>{
			this.props.libraryUpdates(response.data.items);
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
		 removalInformation={this.props.removalInformation}
		 componentDidMount={this.props.componentDidMount}
		 libraryUpdateFan={this.libraryUpdateFan}
		 libraryIndicator={this.props.libraryIndicator}
		 librarySearchIndicator={this.props.librarySearchIndicator}
		  />
	}
}

let mapStateToProps = (state) =>{
	return {
		bookCoverLibrarys: state.library.bookCoverLibrary,
		informationBoo: state.library.informationBoo,
		searchText: state.library.searchText,
		libraryIndicator: state.library.libraryIndicator
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
		removalInformation: () => {
			dispatch(removalInformation());
		},
		libraryUpdates: (book) => {
			dispatch(libraryUpdate(book));
		},
		librarySearchIndicator: () => {
			dispatch(librarySearchIndicator())
		}
	}
}

const LibraryContainer = connect(mapStateToProps, mapDispatchToProps)(LibraryAPI);

export default LibraryContainer;