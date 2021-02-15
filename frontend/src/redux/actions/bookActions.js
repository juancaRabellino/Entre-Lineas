const { default: axios } = require("axios")

const bookActions = {
  addBook: (book) => {
    return async (dispatch, getState) => {
      try {
      console.log('llega')
      const response = await axios.post('http://localhost:4000/api/addBook', {book})
      dispatch({type: 'ADD_BOOK', payload:response.data})
      console.log(response)
      }catch(error){
      console.log(error)
      }
    }
  }
}

export default bookActions