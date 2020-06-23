import React from 'react';
import s from '../Header.module.scss';
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
        <div className={s.status__picchu__block}>
          <img src={picchu} className={s.status__picchu} alt="picchu" />
        </div>
        { !this.state.aditMode &&
          <div className={s.status__text__block}>
            <span onDoubleClick={this.activeEditMode.bind(this)} className={s.status__text}>{this.props.status}</span>
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
