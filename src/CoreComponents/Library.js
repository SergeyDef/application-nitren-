import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './library.module.css';
import LibraryContainer from './LibraryContainer';
import * as axios from 'axios';


class Library extends React.Component {

	componentDidMount(){
		axios.get("https://raw.githubusercontent.com/SergeyDef/nitrenJSON-/master/books.json").then(response =>{
			console.log(response.data.items);
			this.props.setBooks(response.data.items);
		});
	}

	render (){
		let textSearch = React.createRef();

		let onTextSearch = () =>{
			let text = textSearch.current.value;
			this.props.textChenge(text);
		}

		 return (
	      	<div className={s.dialogs}>
		         <div className={s.subscribers}>
			      <input type='text' 
			      className={s.subscribers_form} 
			      onChange={onTextSearch}
			      ref={textSearch}
			      value={this.props.searchText} 
			      ></input>
			      <select>
				      	<option>Search by name</option>
				      	<option>Search by writer</option>
				      	<option>Search by IDI</option>
			      </select>
			      <button className={s.buttons} onClick={this.props.searchBooks} >Найти</button>
      		</div>
	        <div className={s.library}>
		        {
		        this.props.bookCoverLibrarys.map(b => <div id={b.id} className={s.library_book} >
				<img 
				src={b.imgBook} 
				alt="book" 
				className={s.library_book_img} 
				title="view details" 
				onClick = { (event) => this.props.showInformations(event.currentTarget.id) } />
				<span className={s.library_book_name} title="read book">{b.nameBook}</span> 
				</div>)
		        }   	
	        </ div>
	        { 
	        	this.props.information === null ? console.log("there was no request") :
	        	this.props.informationBoo.map(i => <div className={s.information_window} >
	        		<h4 className={s.information_window_title}>information about the book</h4>
		        	<span className={s.information_window_line}>{"id:" + " " + i.id}</span>
		        	<span className={s.information_window_line}>{"book title:" + " " + i.nameBook}</span>
		        	<span className={s.information_window_line}>{"workbook author:" + " " + i.author}</span>
		        	<span className={s.information_window_line}>{"date added:" + " " + i.uploadDate}</span>
				</div>)
	        }
	      	</div>
	    );
	}
}

export default Library;
