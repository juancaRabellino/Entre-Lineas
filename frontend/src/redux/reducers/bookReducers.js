
const initialState = {
  books: [],
  newBook: [],
  filter: [],
  comment: [],
  booksByGenre: [],
  vote: {}
}

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        newBook: action.payload
      }
    case 'CHAPTER_CONTENT':
      return {
        ...state,
        newBook:action.payload
      }
    case 'GET_NEW_BOOK':
      return{
        ...state,
        newBook: action.payload
      }
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        filter: action.payload,
        comment: state.books.map(book => book._id === action.payload._id ? action.payload : book)
      }
    case 'GET_BY_GENRE':
      return{
        ...state,
        booksByGenre: action.payload
      }  
    case 'SEARCH_BOOKS':
    	return {
        	...state,
        	filter: state.books.filter(book => book.title.toUpperCase().includes(action.payload.toUpperCase().trim())
          || book.genre.toUpperCase().includes(action.payload.toUpperCase().trim())  
        	|| book.user.firstname.toUpperCase().includes(action.payload.toUpperCase().trim()) 
        	|| book.user.lastname.toUpperCase().includes(action.payload.toUpperCase().trim()))
      }
      case 'ADD_COMMENTS':
          return{
              ...state,
              comment: action.payload
          }
      case 'DELETE_COMMENT':
          return {
              ...state,
              comment: action.payload
          }
      default:
      return state
	}
}

export default bookReducers