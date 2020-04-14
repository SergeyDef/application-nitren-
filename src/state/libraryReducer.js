const SET_BOOK = 'SET-BOOK';
const DETAILED_INFORMATION = 'DETAILED-INFORMATION';
const TEXT_CHENGE = 'TEX-CHENGE';
const SEARCH_OPTION = 'SEARCH-OPTION';
const SEARCH = 'SEARCH';
const REMOVE = 'REMOVE';


let initialState = {
	bookCoverLibrary: [],
    informationBoo:[],
    searchText: '',
    searchOption: "1"
}

const libraryReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_BOOK:
        {
        return { ...state, bookCoverLibrary: [ ...state.bookCoverLibrary, ...action.book ]}
        }
        case DETAILED_INFORMATION:
        return {
            ...state,
            informationBoo: state.bookCoverLibrary.map(y => {
                    if (y.id === action.bookId) {
                        return y;
                    }
                return y;
            })
            }
        case TEXT_CHENGE:
        return { ...state, searchText: action.newText}
        case SEARCH_OPTION:
        return { ...state, searchOption: action.option }
        case SEARCH:
        return {
            ...state, 
            bookCoverLibrary: state.bookCoverLibrary.map( k => {
                if (state.searchOption == "1") {
                    (state.searchText == k.nameBook) ? console.log(k) : console.log("Book not found");
                    return {...k} 
                } else if (state.searchOption == "2") {
                    (state.searchText == k.author) ? console.log(k) : console.log("Writer not found");
                    return {...k}
                } else if (state.searchOption == "3") {
                    (state.searchText == k.id) ? console.log(k) : console.log("Id not found");
                    return {...k}
                } else {
                    console.log("Nothing found");
                    return k;
                }
                return k;
            })
        }
        default:
        return state;
    }
}

export const setBook = (book) =>({
    type: SET_BOOK, book
});
export const showInformation = (bookId) =>({
    type: DETAILED_INFORMATION, bookId
});
export const textChenge = (newText) =>({
    type: TEXT_CHENGE, newText
});
export const searchOption = (option) =>({
    type: SEARCH_OPTION, option
});
export const searchBook = () =>({ type: SEARCH });

export default libraryReducer;

// k.nameBook === state.searchText && searchResult.push(...k);


// if (state.searchOption === 1) {
//                     for (var i = 0; i < state.bookCoverLibrary.length; i++) {                      
//                            console.log(i);
//                     }
//                     if (k.nameBook != state.searchText) {
//                         state.bookCoverLibrary.delete(k);
//                     } return k;
//                 } else if (state.searchOption === 2) {
//                     for (var i = 0; i < state.bookCoverLibrary.length; i++) {                      
//                            console.log(i);
//                     }
//                     if (k.nameBook != state.searchText) {
//                        state.bookCoverLibrary.delete(k);
//                     } return k;   
//                 } else if (state.searchOption === 3){
//                     debugger;
//                     for (var i = 0; i < state.bookCoverLibrary.length; i++) {                      
//                            console.log(i);
//                     }
//                     return k;
//                 } return k;

// (state.searchText == k.id) ? console.log(k) : console.log("Nothing found"); 