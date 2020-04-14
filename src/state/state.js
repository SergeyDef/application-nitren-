import userPostReducer from './userProfileReducer';
import dialogsReducer from './dialogsReducer';
import protoPostReducer from './protoPostReducer';
import libraryReducer from './libraryReducer';
import subscribersReducer from './subscribersReducer';

let store = { 
  _state:{
    dialogs:{
      dialogData:[
      {id:1, name:"Марина", surname:"Петрова", photoImg:"https://avatars.mds.yandex.net/get-pdb/1936494/b54ac088-fa39-4f4f-b8dd-1d387da466ae/s1200"},
      {id:2, name:"Lenka", surname:"Петрова", photoImg:"https://i.pinimg.com/736x/6d/0c/70/6d0c706de732b1b6486166a6a0fd99b4--art-zombie-zombie-girl.jpg"},
      {id:3, name:"Катя", surname:"Razvrat", photoImg:"https://wallpaperscave.ru/images/original/18/06-16/dark-zombie-58385.jpg"},
      {id:4, name:"Алексей", surname:"Давыдов", photoImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/864c229e-d127-4fcd-9a6f-c76f04253c7c/db38hgo-01ae416c-9621-41b0-8f60-72839c8b1b9f.jpg/v1/fill/w_1000,h_799,q_70,strp/werewolf_girl_3_by_liminalbean_db38hgo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyMiIsInBhdGgiOiJcL2ZcLzg2NGMyMjllLWQxMjctNGZjZC05YTZmLWM3NmYwNDI1M2M3Y1wvZGIzOGhnby0wMWFlNDE2Yy05NjIxLTQxYjAtOGY2MC03MjgzOWM4YjFiOWYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Fcb4WRhT8ToCpOn7WpWhO5mIL9rKNlaUwL_i7eXlnhA"},
      {id:5, name:"Ленка", surname:"Шипилова", photoImg:"http://img1.joyreactor.cc/pics/post/art-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B7%D0%BE%D0%BC%D0%B1%D0%B8-zombie-243857.jpeg"}
    ],
      messageData:[
        {id:1, message:"Hi!", name:"Ирина Шипилова", photoImg:"http://img1.joyreactor.cc/pics/post/art-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B7%D0%BE%D0%BC%D0%B1%D0%B8-zombie-243857.jpeg"},
        {id:2, message:"How are You?", name:"Батько Мохно", photoImg:"https://i.pinimg.com/736x/4a/8c/86/4a8c862871bdbbafb4c28de94e2b6a93.jpg"},
        {id:3, message:"All right.", name:"Дять Лёша", photoImg:"http://satellitesoda.com/assets/images/ddf/2014/og_3480-goblin-3-by-_olson_.jpg"},
        {id:3, message:"All right.", name:"Дять Лёша", photoImg:"http://satellitesoda.com/assets/images/ddf/2014/og_3480-goblin-3-by-_olson_.jpg"}
      ],
      newMessagText: 'Your message'
    },
    library:{
      bookCoverLibrary:[
        {id:1, nameBook: "Большая книга СКАЗОК мира", imgBook: "https://chitatel.by/storage/thumbs/9e/h1001_w1001_9e37eec4738db604c33f90e0243f73e4.jpg"},
        {id:2, nameBook: "Капитанская дочка", imgBook: "https://mmedia.ozone.ru/multimedia/1014781907.jpg"},
        {id:3, nameBook: "Джуфф Вандермеер БОРН", imgBook: "https://cdn.book24.ru/v2/ITD000000000891543/COVER/cover3d1.jpg"},
        {id:1, nameBook: "Джеймс Роллинс Глаз бога", imgBook: "https://cmp24.ru/images/prodacts/sourse/61718/61718885_glaz-boga-eksmo-press.jpg"},
        {id:1, nameBook: "Большая книга СКАЗОК мира", imgBook: "https://chitatel.by/storage/thumbs/9e/h1001_w1001_9e37eec4738db604c33f90e0243f73e4.jpg"},
        {id:2, nameBook: "Капитанская дочка", imgBook: "https://mmedia.ozone.ru/multimedia/1014781907.jpg"},
        {id:3, nameBook: "Джуфф Вандермеер БОРН", imgBook: "https://cdn.book24.ru/v2/ITD000000000891543/COVER/cover3d1.jpg"},
        {id:1, nameBook: "Джеймс Роллинс Глаз бога", imgBook: "https://cmp24.ru/images/prodacts/sourse/61718/61718885_glaz-boga-eksmo-press.jpg"}
      ]
    },
    photoPost:{
      comments:[
        {id: 1, message: 'stretch', name:"Батько", surname:"Мохно", imgAva:'http://img1.joyreactor.cc/pics/post/art-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B7%D0%BE%D0%BC%D0%B1%D0%B8-zombie-243857.jpeg'},
        {id: 2, message: 'start', name:"Дять", surname:"Лёша", imgAva:'http://satellitesoda.com/assets/images/ddf/2014/og_3480-goblin-3-by-_olson_.jpg'},
        {id: 3, message: 'end', name:"Катя", surname:"Razvrat", imgAva:'https://wallpaperscave.ru/images/original/18/06-16/dark-zombie-58385.jpg'}
      ],
      newCommentText: 'leave a comment'
    },

    userProfile:{
        name:[
        {id:1, nameName:'Sergey', nameSurname:'Def'}
      ],
      avatar:[
        {id:1, avatarSrc:"https://i.pinimg.com/736x/58/ff/24/58ff242660049800664c62d5f2afe907--fantasy-inspiration-character-inspiration.jpg"}
      ],
    userFriendAwa:[
      {id:1, friendName:'Марина', avatarSrcFriend:"https://avatars.mds.yandex.net/get-pdb/1936494/b54ac088-fa39-4f4f-b8dd-1d387da466ae/s1200"},
      {id:2, friendName:'Lenka', avatarSrcFriend:"https://i.pinimg.com/736x/6d/0c/70/6d0c706de732b1b6486166a6a0fd99b4--art-zombie-zombie-girl.jpg"},
      {id:3, friendName:'Катя', avatarSrcFriend:"https://wallpaperscave.ru/images/original/18/06-16/dark-zombie-58385.jpg"},
      {id:4, friendName:'Алексей', avatarSrcFriend:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/864c229e-d127-4fcd-9a6f-c76f04253c7c/db38hgo-01ae416c-9621-41b0-8f60-72839c8b1b9f.jpg/v1/fill/w_1000,h_799,q_70,strp/werewolf_girl_3_by_liminalbean_db38hgo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyMiIsInBhdGgiOiJcL2ZcLzg2NGMyMjllLWQxMjctNGZjZC05YTZmLWM3NmYwNDI1M2M3Y1wvZGIzOGhnby0wMWFlNDE2Yy05NjIxLTQxYjAtOGY2MC03MjgzOWM4YjFiOWYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Fcb4WRhT8ToCpOn7WpWhO5mIL9rKNlaUwL_i7eXlnhA"},
      {id:5, friendName:'Ленка', avatarSrcFriend:"http://img1.joyreactor.cc/pics/post/art-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B7%D0%BE%D0%BC%D0%B1%D0%B8-zombie-243857.jpeg"}
    ],
    userPostDate:[
      {id:1, datePublication:'08.01.2020', text:'Мой новый номер: 89773503797'},
      {id:2, datePublication:'07.01.2020', text:'Хей!'}
    ],
    newPostText: 'News of the day'
    },
    subscribers:{
      myFriendsData:[
        { id:1, avaFriend:'https://avatars.mds.yandex.net/get-pdb/1066918/82c2c322-43cd-45db-9dc8-2f5a55d11d39/s1200?webp=false', nameFriend:'Алексей', surnameFriend:'Давыдов', onWebsite:'был на сайте: 11.12.2019' },
        { id:2, avaFriend:'https://yt3.ggpht.com/a/AGF-l7981H9pdRvVEd-cIyXhg_rzDKG4kOycKY7uDg=s900-c-k-c0xffffffff-no-rj-mo', nameFriend:'Дять', surnameFriend:'Лёша', onWebsite:'online'},
        { id:3, avaFriend:'https://img3.goodfon.ru/original/1400x1050/3/26/art-zack-argunov-devushka.jpg', nameFriend:'Ирина', surnameFriend:'Шипилова', onWebsite:'online'},
        { id:4, avaFriend:'https://i.pinimg.com/originals/8a/ec/c4/8aecc4b99cf3f2cf1ddd0052f934a527.jpg', nameFriend:'', surnameFriend:'', onWebsite:'был на сайте: 15.01.2020' },
        { id:5, avaFriend:'https://i.pinimg.com/originals/45/34/8c/45348c6e37956ee991a3ebd845e4d762.jpg', nameFriend:'Lenka', surnameFriend:'Razvrat', onWebsite:'был на сайте: 22.01.2020' },
        { id:6, avaFriend:'https://img3.badfon.ru/wallpaper/big/3/2d/devushka-lico-elf-vzglyad-7450.jpg', nameFriend:'Марина', surnameFriend:'Петрова', onWebsite:'online'}
      ]
    }
  },
  _callSubscriber(){
    console.log('State changed');
  },
  getState(){
    return this._state;
  },
  obsebscride(observer){
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state.userProfile = userPostReducer(this._state.userProfile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.photoPost = protoPostReducer(this._state.photoPost, action);
    this._state.library = libraryReducer(this._state.library, action);
    this._state.subscribers=subscribersReducer(this._state.subscribers, action);

    this._callSubscriber(this._state);

  }
}

export default store;

window.state = store._state;
