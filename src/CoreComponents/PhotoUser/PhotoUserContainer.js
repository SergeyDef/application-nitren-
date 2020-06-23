import React from 'react';
import {connect} from 'react-redux';
import PhotoUser from './PhotoUser';
import {getPhoto} from '../../api/api';
import{setUserPhotos} from '../../state/photoUserReducer';

class PhotoUserAPI extends React.Component {

  componentDidMount(){
      getPhoto().then(response =>{
      this.props.setUserPhotos(response.data.items);
    });
  }

  render (){
    return <PhotoUser userPhotos={this.props.userPhotos}
            componentDidMount={this.props.componentDidMount}
            setUserPhotos={this.props.setUserPhotos} />
  }
}


let mapStateToProps = (stete) =>{
  return {
    userPhotos: stete.photoUser.userPhotos
  }
}

const PhotoUserContainer = connect(mapStateToProps, {setUserPhotos})(PhotoUserAPI);

export default PhotoUserContainer;
