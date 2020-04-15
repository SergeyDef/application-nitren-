import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './library.module.css';
import LibraryContainer from './LibraryContainer';


let Library = (props) => {

		let textSearch = React.createRef();

		let onTextSearch = () =>{
			let text = textSearch.current.value;
			props.textChenge(text);
		}

		let selectValue = React.createRef();

		let onselectValue = () =>{
			let option = selectValue.current.value;
			props.searchOptions(option);
		}

		let startSearchBooks = () =>{
			props.searchBooks();
		}

		
		 return (
	      	<div className={s.dialogs}>
		         <div className={s.subscribers}>
			      <input type='text' 
			      className={s.subscribers_form} 
			      onChange={onTextSearch}
			      ref={textSearch}
			      value={props.searchText} 
			      ></input>
			      <select ref={selectValue} onChange={ () => onselectValue()}>
				      	<option value={"1"}>Search by name</option>
				      	<option value={"2"}>Search by writer</option>
				      	<option value={"3"}>Search by ID</option>
			      </select>
			      <button className={s.buttons} onClick={startSearchBooks} >Найти</button>
      		</div>
	        <div className={s.library}>
		        {
		        props.bookCoverLibrarys.map(b => <div id={b.id} className={s.library_book} >
				<img 
				src={b.imgBook} 
				alt="book" 
				className={s.library_book_img} 
				title="view details" 
				onClick = { () => props.showInformations(b.id) } />
				<span className={s.library_book_name} title="read book">{b.nameBook}</span> 
				</div>)
		        }   	
	        </ div>
	        { 
	        	props.information === null ? console.log("there was no request") :
	        	props.informationBoo.map(i => <div className={s.information_window_container}>
	        		<span onClick={props.removalInformation} className={s.information_window_close}>x</span>
		        	<div className={s.information_window} >
		        		<h4 className={s.information_window_title}>information about the book</h4>
		        		<div className={s.information_window_info}>
			        		<div className={s.information_window_img_Container}>
			        			<img src={i.imgBook} className={s.information_window_img}/>
			        		</div>
			        		<div className={s.information_window_line_Container}>
					        	<span className={s.information_window_line}>{"id:" + " " + i.id}</span>
					        	<span className={s.information_window_line}>{"book:" + " " + i.nameBook}</span>
					        	<span className={s.information_window_line}>{"author:" + " " + i.author}</span>
					        	<span className={s.information_window_line}>{"date added:" + " " + i.uploadDate}</span>
				        	</div>
			        	</div>
					</div>
				</div>)
	        }
	      	</div>
	    );
	}

export default Library;
