import axios from 'axios'

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
      try {
        dispatch({type: 'SEARCH_BOOKS', payload: value})
      }catch(error){
        console.log(error)
      }
    }
  },

  addChapter: (chapter, id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/book/addChapter', {chapter, id})
        //   headers: {
        //     Authorization : `Bearer ${token}`
        //   }
        // })
        console.log(response.data)
        dispatch({type: 'UPDATE_BOOK', payload: response.data.response})
      }catch(error){
        console.log(error)
      }
    }
  },

  addComment:(content, id, token) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.post('http://localhost:4000/api/comments', {content, id}, {
          headers: {
              Authorization: `Bearer ${token}` 
          }
      })
        dispatch({type: 'ADD_COMMENT', payload: res.data})
        return true
      } catch(error){
        console.log(error)
      }
    }
  },

  deleteComment: (id, idcomment, token) => {
    return async(dispatch, getState) => {
      try {
        const res = await axios.put('http://localhost:4000/api/comments/delete', {id, idcomment}, {
          headers: {
              Authorization: `Bearer ${token}` 
          }
      })
        dispatch({type: 'DELETE_COMMENT', payload: res.data})
      } catch(error){
        console.log(error)
      }
    }
  },

  modComment: (value, idcomment, id, token) => {
    return async (dispatch, getState) => {
      try{
        const res = await axios.put('http://localhost:4000/api/comments/', {value, idcomment, id}, {
          headers: {
              Authorization: `Bearer ${token}` 
          }
      })
        dispatch({type: 'ADD_COMMENT', payload: res.data})
      } catch(error){
        console.log(error)
      }
    }
  },

  like:(id, token) => {
    return async(dispatch, getState) => {
      try {
        const res = await axios.post('http://localhost:4000/api/likes/', {id}, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        })
        dispatch({type: 'LIKE', payload: res.data})
      } catch(error){
        console.log(error)
      }
    }
  },

  dislike:(id, token) => {
    return async(dispatch, getState) => {
      try {
        const res = await axios.post('http://localhost:4000/api/dislike/', {id}, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        })
        dispatch({type: 'LIKE', payload: res.data})
      } catch(error){
        console.log(error)
      }
    }
  }
}

export default bookActions