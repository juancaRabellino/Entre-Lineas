
const initialState = {
  books: [],
  newBook: [],
  filter: [],
  comments: [],
  booksByGenre: [],
  vote: {}
}

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        newBook: action.payload
      }
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        filter: action.payload
      }
    case 'GET_BY_GENRE':
      return{
        ...state,
        booksByGenre: action.payload.sort((a,b)=> b.views - a.views)
      }  
    case 'SEARCH_BOOKS':
    	return {
        	...state,
        	filter: state.books.filter(book => book.title.toUpperCase().includes(action.payload.toUpperCase().trim())
          || book.genre.toUpperCase().includes(action.payload.toUpperCase().trim())  
        	|| book.user.firstname.toUpperCase().includes(action.payload.toUpperCase().trim()) 
        	|| book.user.lastname.toUpperCase().includes(action.payload.toUpperCase().trim()))
      }
    case 'VOTE':
      return {
        ...state,
        books: state.books.map(book => book._id === action.payload.response._id ? action.payload.response : book)
      }
    case 'COMMENT':
      return {
        ...state,
        books: state.books.map(book => book._id === action.payload.response._id ? action.payload.response : book)
      }
    default:
      return state
	}
}

export default bookReducers