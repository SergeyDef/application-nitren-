const ADD_COMMENTS_PHOTO = 'ADD-COMMENTS-PHOTO';
const NEW_COMMENTS_PHOTO = 'NEW-COMMENTS-PHOTO';

let initialState = {
  comments: [
        {id: 1, message: 'stretch', name:"Батько", surname:"Мохно", imgAva:'http://img1.joyreactor.cc/pics/post/art-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B7%D0%BE%D0%BC%D0%B1%D0%B8-zombie-243857.jpeg'},
        {id: 2, message: 'start', name:"Дять", surname:"Лёша", imgAva:'http://satellitesoda.com/assets/images/ddf/2014/og_3480-goblin-3-by-_olson_.jpg'},
        {id: 3, message: 'end', name:"Катя", surname:"Razvrat", imgAva:'https://wallpaperscave.ru/images/original/18/06-16/dark-zombie-58385.jpg'}
      ],
      newCommentText: 'leave a comment'
}


const protoPostReducer = (state = initialState, action) =>{
  let stateCopy = {...state};
  stateCopy.comments = [...state.comments];
     if (action.type === ADD_COMMENTS_PHOTO){
        let newComments = {
          id: 1,
          message: state.newCommentText,
          name: 'Sergey',
          surname: 'Def',
          imgAva: 'https://i.pinimg.com/736x/58/ff/24/58ff242660049800664c62d5f2afe907--fantasy-inspiration-character-inspiration.jpg'
        }
        stateCopy.comments.push(newComments);
        stateCopy.newCommentText = "";
      } else if (action.type === NEW_COMMENTS_PHOTO){
        stateCopy.newCommentText = action.newTextComment;
    }
      
  return stateCopy;
}

export const addCommentsPhotoCreator = () =>({ type: ADD_COMMENTS_PHOTO });

export const newCommentsPhotoCreator = (text) =>({
    type: NEW_COMMENTS_PHOTO, 
    newTextComment: text
  });

export default protoPostReducer;