const AAD_USER_POST = 'AAD-USER-POST';
const NAW_POST_TEXT = 'NAW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const GET_USER_FRIENDS = 'GET_USER_FRIENDS';

let initialState = {
  name: [
        {id:1, nameName:'Sergey', nameSurname:'Def'}
      ],
  avatar: [
        {id:1, avatarSrc:"https://i.pinimg.com/736x/58/ff/24/58ff242660049800664c62d5f2afe907--fantasy-inspiration-character-inspiration.jpg"}
  ],
  userFriendAwa: [
        {id:1, friendName:'Марина', avatarSrcFriend:"https://avatars.mds.yandex.net/get-pdb/1936494/b54ac088-fa39-4f4f-b8dd-1d387da466ae/s1200"},
        {id:2, friendName:'Lenka', avatarSrcFriend:"https://yt3.ggpht.com/a/AGF-l78G1OYVfx10MRsHr3tzTjQ_FFMM6nt_cjiZzQ=s900-c-k-c0xffffffff-no-rj-mo"},
        {id:3, friendName:'Катя', avatarSrcFriend:"https://i.pinimg.com/originals/8a/ec/c4/8aecc4b99cf3f2cf1ddd0052f934a527.jpg"},
        {id:4, friendName:'Алексей', avatarSrcFriend:"https://img3.badfon.ru/wallpaper/big/3/2d/devushka-lico-elf-vzglyad-7450.jpg"},
        {id:5, friendName:'Ленка', avatarSrcFriend:"https://i.pinimg.com/originals/45/34/8c/45348c6e37956ee991a3ebd845e4d762.jpg"},
  ],
  userData: [
      { status:"Тёмный эльф", age:"30", activity:"Разработка этого сайта", subscriptions:21, photo:5, town:"Москва" }
    ],
  profile: [],
  userPostDate: [
        {id:1, datePublication:'08.01.2020', text:'Мой новый номер: 89773503797'},
        {id:2, datePublication:'07.01.2020', text:'Хей!'}
  ],
  newPostText: 'News of the day'
}

const userPostReducer = (state = initialState, action) =>{
      switch(action.type){
        case AAD_USER_POST: {
          let newPost = {
          id: 3,
            datePublication: "now",
            text: state.newPostText
          };
          let stateCopy = {...state};
          stateCopy.userPostDate = [...state.userPostDate];
          stateCopy.userPostDate.push(newPost);
          stateCopy.newPostText = '';
          return stateCopy;
          }
        case NAW_POST_TEXT: {
          let stateCopy = {...state};
          stateCopy.newPostText = action.newText;
          return stateCopy;
          }
        case SET_USER_PROFILE: {
          return {...state, profile: action.profile}
        }
        default:
          return state;
      } 
}

export const addUserPostCreator = () =>({ type: AAD_USER_POST });

export const updateNawPostTextCreator = (text) =>({
    type: NAW_POST_TEXT,
    newText: text
  });
export const setUserProfileData = (profile) =>({
  type: SET_USER_PROFILE,
  profile
});

export default userPostReducer; 