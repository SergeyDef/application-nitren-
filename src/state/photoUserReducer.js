const ADD_COMMENTS_PHOTO = 'ADD-COMMENTS-PHOTO';
const NEW_COMMENTS_PHOTO = 'NEW-COMMENTS-PHOTO';
const SET_USER_PHOTOS = 'SET-USER-PHOTOS';
const VIEW_PHOTO = 'VIEW_PHOTO';

let initialState = {
  comments: [
        {id: 1, message: 'stretch', name:"Батько", surname:"Мохно", imgAva:'https://avatars.mds.yandex.net/get-pdb/1946731/81562de2-d8e2-45a9-894b-f4caa981d434/s1200?webp=false'},
        {id: 2, message: 'start', name:"Дять", surname:"Лёша", imgAva:'https://avatars.mds.yandex.net/get-pdb/2475436/449abc78-8799-4898-8e52-69d5315e76b2/s1200?webp=false'},
        {id: 3, message: 'end', name:"Катя", surname:"Razvrat", imgAva:'https://yt3.ggpht.com/a/AATXAJwmWDF6Sx3MHL6ZC4L58Nb3cUyZvhh1zKg3iQ=s900-c-k-c0xffffffff-no-rj-mo'}
      ],
  newCommentText: 'leave a comment',
  userPhotos: [],
}


const photoUserReducer = (state = initialState, action) =>{
  switch(action.type){
    case SET_USER_PHOTOS:
    debugger
      return { ...state, userPhotos: [ ...state.userPhotos, ...action.photo ] }
    case VIEW_PHOTO: {
      return state
    }
    case ADD_COMMENTS_PHOTO: {
      let stateCopy = {...state};
      stateCopy.comments = [...state.comments];
      let newComments = {
          id: 1,
          message: state.newCommentText,
          name: 'Sergey',
          surname: 'Def',
          imgAva: 'https://i.pinimg.com/736x/58/ff/24/58ff242660049800664c62d5f2afe907--fantasy-inspiration-character-inspiration.jpg'
        }
      stateCopy.comments.push(newComments);
      stateCopy.newCommentText = "";
      return stateCopy
    }
    case NEW_COMMENTS_PHOTO:
      return { ...state, newCommentText: action.newTextComment }
    default:
    return state;
  }
}

export const addCommentsPhotoCreator = () =>({ type: ADD_COMMENTS_PHOTO });

export const newCommentsPhotoCreator = (text) =>({
    type: NEW_COMMENTS_PHOTO, 
    newTextComment: text
  });

export const setUserPhotos = (photo) =>({ 
  type: SET_USER_PHOTOS, photo
});

export default photoUserReducer;