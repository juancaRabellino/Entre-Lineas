const initialState = {
  books: [],
  filter: [],
}

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        books: action.payload
      }
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        filter: action.payload
      }
    case 'SEARCH_BOOKS':
    	return {
        	...state,
        	filter: state.books.filter(book => book.title.toUpperCase().includes(action.payload.toUpperCase().trim())  
        	|| book.user.firstname.toUpperCase().includes(action.payload.toUpperCase().trim()) 
        	|| book.user.lastname.toUpperCase().includes(action.payload.toUpperCase().trim())
        	)
        }
    default:
      return state
	}
}

export default bookReducers