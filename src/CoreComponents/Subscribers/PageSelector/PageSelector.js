import React from 'react';
import {connect} from 'react-redux';
import Subscribers from '../Subscribers';
import s from '../subscribers.module.css';
import {addPages} from '../../../state/subscribersReducer';
import arrow_right from '../../../assec/img/arrow_right.svg';
import left_arrow from '../../../assec/img/left_arrow.svg';

class PageSelector extends React.Component {
	stete = {
		pagesLeftIndicator: true,
	 	pagesRightIndicator: true
	}
	indicatorChangeLeft = () => {
		if (this.props.pagesLeft === 0) {
			this.stete.pagesLeftIndicator = false;
		} else if (this.props.pagesLeft != 0) {
			this.stete.pagesLeftIndicator = true;
		}
	}
	indicatorChangeRight = () =>{
		if (this.props.pagesRight < 10) {
			this.stete.pagesRightIndicator = false;
		} else {
			this.stete.pagesRightIndicator = true;
		}
	}
	render() {
		return <Selectors totalUsersCounts={this.props.totalUsersCounts}
		pageSize={this.props.pageSize}
		currentPage={this.props.currentPage}
		onPageChanged={this.props.onPageChanged}
		pagesLeft={this.props.pagesLeft}
		pagesRight={this.props.pagesRight}
		pagesLeftIndicator={this.stete.pagesLeftIndicator}
		pagesRightIndicator={this.stete.pagesRightIndicator}
		addPages={this.props.addPages}
		indicatorChangeLeft={this.indicatorChangeLeft}
		indicatorChangeRight={this.indicatorChangeRight}
		/>
	}
}

let Selectors = (props) =>{
	props.indicatorChangeLeft();
	props.indicatorChangeRight();
		let left = props.pagesLeft;
		let right = props.pagesRight;
		

		let leftFlipping = () => {
			left +=10;
			right +=10;
			props.addPages(left, right);
		}
		let rightFlipping = () => {
			left -=10;
			right -=10;
			props.addPages(left, right);
		}

		let pagesCount = Math.ceil(props.totalUsersCounts / props.pageSize);
		let pages = [];
		for (let i=1; i <= pagesCount; i++){
			if (i >= props.pagesLeft && i <= props.pagesRight) {
				pages.push(i);
			}
		}
		return ( 
			<div className={s.switch_block}>
			{ props.pagesLeftIndicator &&
				<div className={s.selectorPage}>
		      		<button className={s.page_button} onClick={rightFlipping} ><img src={left_arrow} className={s.arrow} alt="arrow" /></button>
				      	<span className={s.page_point}></span>
				      	<span className={s.page_point}></span>
				      	<span className={s.page_point}></span>
		    	</div>
			}
	      	{
	      		pages.map( p =>{
	      			return <span className={props.currentPage === p ? s.this_switch : s.switchs}
	      			onClick={ (e) => { props.onPageChanged(p); }} >{p}</span>
	      		})
	      	}
	      	{ props.pagesRightIndicator &&
	      		<div className={s.selectorPage}>
			      	<span className={s.page_point}></span>
			      	<span className={s.page_point}></span>
			      	<span className={s.page_point}></span>
			      	<button className={s.page_button} onClick={leftFlipping} ><img src={arrow_right} className={s.arrow} alt="right" /></button>
		    	</div>
	      	}
      	</div>)
}

let mapStateToProps = (state) =>{
	return {
		totalUsersCounts: state.subscribers.totalUsersCounts,
		pageSize: state.subscribers.pageSize,
		currentPage: state.subscribers.currentPage,
		pagesLeft: state.subscribers.pagesLeft,
		pagesRight: state.subscribers.pagesRight,
		pagesLeftIndicator: state.subscribers.pagesLeftIndicator,
		pagesRightIndicator: state.subscribers.pagesRightIndicator
	}
}

let PageSelectorContainer = connect(mapStateToProps, {addPages})(PageSelector);

export default PageSelectorContainer;