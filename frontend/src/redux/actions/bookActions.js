const { default: axios } = require("axios")

const bookActions = {

  addBook: (book) => {
    return async (dispatch, getState) => {
      try {
      const response = await axios.post('http://localhost:4000/api/book', {book})
      dispatch({type: 'ADD_BOOK', payload:response.data})
      console.log(response)
      }catch(error){
      console.log(error)
      }
    }
  },
    getBooks: () => {
        return async (dispatch, getState) => {
            try {
							const response = await fetch('http://localhost:4000/api/book')
							const data = await response.json()
							dispatch({type: 'GET_BOOKS', payload: data.response})
						}catch(error){
							console.log(error)
						}
        }
    },

    searchBooks: (value) => {
        return (dispatch, getState) => {
            dispatch({type: 'SEARCH_BOOKS', payload: value})
        }
    }



}

export default bookActions