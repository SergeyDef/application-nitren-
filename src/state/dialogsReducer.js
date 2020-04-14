const AAD_USER_MESSAGE = 'AAD-USER-MESSAGE';
const NAW_USER_MESSAGE = 'NAW-USER-MESSAGE';

let initialState = {
  dialogData: [
      {id:1, name:"Марина", surname:"Петрова", photoImg:"https://avatars.mds.yandex.net/get-pdb/1936494/b54ac088-fa39-4f4f-b8dd-1d387da466ae/s1200"},
      {id:2, name:"Lenka", surname:"Петрова", photoImg:"https://yt3.ggpht.com/a/AGF-l7-81ilz8Olcihx_qtwmAXoDTlDOFVpzl1yi=s900-c-k-c0xffffffff-no-rj-mo"},
      {id:3, name:"Кирил", surname:"Соколов", photoImg:"https://s1.1zoom.ru/b5050/284/Elves_Men_Young_man_533464_600x800.jpg"},
      {id:4, name:"Алексей", surname:"Давыдов", photoImg:"https://avatars.mds.yandex.net/get-pdb/1920375/a1fdd686-ce97-4512-b30f-a2bf52328127/s1200?webp=false"},
      {id:5, name:"Ленка", surname:"Шипилова", photoImg:"https://i.pinimg.com/originals/d8/3c/7f/d83c7f7706f4bfea9aacdc2d4645cee1.jpg"}
    ],
    messageData:[
        {id:1, message:"Hi!", name:"Ирина Шипилова", photo:"https://avatars.mds.yandex.net/get-pdb/1621302/0e52cea4-4e40-4360-b263-b493d7d97c05/s1200?webp=false"},
        {id:2, message:"How are You?", name:"Батько Мохно", photo:"https://avatars.mds.yandex.net/get-pdb/1648714/10587213-9bd4-40a1-b6f1-81dab3e882d4/s1200?webp=false"},
        {id:3, message:"All right.", name:"Дять Лёша", photo:"https://yt3.ggpht.com/a/AATXAJwgP5tSVRMQA94HQ5LXWVKZdcEew6GJS13WTg=s900-c-k-c0xffffffff-no-rj-mo"}
      ],
      newMessagText: 'Your message'
}

const dialogsReducer = (state = initialState, action) =>{
      switch(action.type){
        case AAD_USER_MESSAGE: {
          debugger;
          let newPost = {
          id: 4,
          message: state.newMessagText,
          name: "Sergey Def",
          photo: "https://i.pinimg.com/736x/58/ff/24/58ff242660049800664c62d5f2afe907--fantasy-inspiration-character-inspiration.jpg"
        }
          let stateCopy = {...state};
          stateCopy.messageData = [...state.messageData];
          stateCopy.messageData.push(newPost);
          stateCopy.newMessagText = "";
          return stateCopy;
        }
        case NAW_USER_MESSAGE: {
          {
            state.newMessagText = action.newMessage;
          }
          return state;
          }
        default:
          return state;
      } 
}

export const aadUserMessageCreator = () =>({ type: AAD_USER_MESSAGE });

export const nawUserMessageCreator = (text) =>({
    type: NAW_USER_MESSAGE,
    newMessage: text
  });

export default dialogsReducer;