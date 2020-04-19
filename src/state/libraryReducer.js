const SET_BOOK = 'SET-BOOK';
const SET_BOOK_COPY = 'SET_BOOK_COPY';
const DETAILED_INFORMATION = 'DETAILED-INFORMATION';
const DETAILED_INFORMATION_REMOVE = 'DETAILED_INFORMATION_REMOVE';
const TEXT_CHENGE = 'TEX-CHENGE';
const SEARCH_OPTION = 'SEARCH-OPTION';
const SEARCH = 'SEARCH';
const REMOVE = 'REMOVE';
const LIBRARY_UPDATE = 'LIBRARY-UPDATE';
const LIBRAY_NDICATOR = 'LIBRAY-NDICATOR';


let initialState = {
	bookCoverLibrary: [],
    bookCoverLibraryCopy: [],
    informationBoo: [],
    searchText: '',
    searchOption: "1",
    libraryIndicator: false
}

const libraryReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_BOOK: {
            let stateCopy = {...state};
            stateCopy.bookCoverLibrary = [...state.bookCoverLibrary];
            stateCopy.bookCoverLibraryCopy = [...state.bookCoverLibrary];
        return stateCopy
        }
        case DETAILED_INFORMATION:
        return {
            ...state,
            informationBoo: state.bookCoverLibrary.filter(y => {
                  return y.id === action.bookId;
                return y;
            })
            }
        case DETAILED_INFORMATION_REMOVE:
        return { ...state, informationBoo: [] }
        case TEXT_CHENGE:
        return { ...state, searchText: action.newText}
        case SEARCH_OPTION:
        return { ...state, searchOption: action.option }
        case SEARCH: {
            let stateCopy = {...state};
            stateCopy.bookCoverLibrary = [...state.bookCoverLibraryCopy.filter(k => {
                    if (state.searchOption == "1") {
                        let search = state.searchText.toLowerCase();
                        let nameBook = k.nameBook.toLowerCase();

                        return nameBook.includes(search);
                    } else if (state.searchOption == "2") {
                        let searchText = state.searchText.toLowerCase();
                        let author = k.author.toLowerCase();

                        return author.includes(searchText);
                    } else if (state.searchOption == "3") {
                        return state.searchText == k.id;
                    }
                    return k;
                })];
            (stateCopy.bookCoverLibrary == 0) ? stateCopy.libraryIndicator = true : 
            stateCopy.libraryIndicator = false;
                
            return stateCopy
            }
         
        case LIBRARY_UPDATE:
        return { ...state, bookCoverLibrary: [ ...state.bookCoverLibrary, ...action.book ] }
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
export const removalInformation = () =>({
 type: DETAILED_INFORMATION_REMOVE
});
export const textChenge = (newText) =>({
    type: TEXT_CHENGE, newText
});
export const searchOption = (option) =>({
    type: SEARCH_OPTION, option
});
export const searchBook = () =>({ 
    type: SEARCH 
});
export const libraryUpdate = (book) =>({
    type: LIBRARY_UPDATE, book
});
export const librarySearchIndicator = () =>({
    type: LIBRAY_NDICATOR
});

export default libraryReducer;



            // let stateCopy = {...state};
            // stateCopy.bookCoverLibrary = [...state.bookCoverLibrary];
            // stateCopy.libraryIndicator = true;