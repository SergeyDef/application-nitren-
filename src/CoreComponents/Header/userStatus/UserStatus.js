import React from 'react';
import s from '../Header.module.css';
import picchu from '../../../assec/img/picchu.svg';

class UserStatus extends React.Component{
    state = {
    aditMode: false
  }
  activeEditMode() {
    this.setState( {
      aditMode: true
    } )
  }
  deActiveEditMode() {
    this.setState( {
      aditMode: false
    } )
  }
  render(){
    return (
      <div className={s.status}>
        <div className={s.picchu_status_block}>
          <img src={picchu} className={s.picchu_status_img} alt="picchu" />
        </div>
        { !this.state.aditMode &&
          <div className={s.status_text_block}>
            <span onDoubleClick={this.activeEditMode.bind(this)} className={s.status_text}>{this.props.status}</span>
          </div>
        }
        { this.state.aditMode &&
          <div className={s.status_field_block}>
            <input aytoFocus={true} onBlur={this.deActiveEditMode.bind(this)} value={this.props.status} className={s.status_field} />
          </div>
        }
        <div className={s.status_button_block}>
          <button className={s.status_button}>add status</button>
        </div>
      </div>
    )
  }
}

export default UserStatus;
