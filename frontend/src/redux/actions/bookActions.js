import axios from 'axios'

const bookActions = {
  
  addBook: (formData, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/book', formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'ADD_BOOK', payload:response.data.response})
        console.log(response.data.response)
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
  getByGenre: (genre)=>{
    return async(dispatch, getState) =>{
      try {
        const response = await fetch('http://localhost:4000/api/book/'+genre)
        const data = await response.json()
        dispatch({type: 'GET_BY_GENRE', payload: data.response})
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
        const response = await axios.post('http://localhost:4000/api/book/addChapter', {chapter, id}, {
          headers: {
            Authorization : `Bearer ${token}`
          }
        })
        console.log(response.data)
        dispatch({type: 'UPDATE_BOOK', payload: response.data.response})
      }catch(error){
        console.log(error) 
      }
    }
  },

  sendContent: (content, id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.put('http://localhost:4000/api/book/addChapter', {content, id}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'SEND_CONTENT', payload: response.data.response})
        console.log(response)
      }catch(error){
        console.log(error)
      }
    }
  },

  addComment:(content, id, token) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.post('http://localhost:4000/api/comments/', {content, id}, {
          headers: {
              Authorization: `Bearer ${token}` 
          }
      })
        dispatch({type: 'ADD_COMMENT', payload: res.data.respuesta})
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
        dispatch({type: 'DELETE_COMMENT', payload: res.data.respuesta})
      } catch(error){
        console.log(error)
      }
    }
  },

  modComment: (value, idcomment, id, token) => {
    console.log(value, idcomment, id, token)
    return async (dispatch, getState) => {
      try{
        const res = await axios.put('http://localhost:4000/api/comments/', {value, idcomment, id}, {
          headers: {
              Authorization: `Bearer ${token}` 
          }
      })
        dispatch({type: 'ADD_COMMENT', payload: res.data.respuesta})
        console.log(res)
      } catch(error){
        console.log(error)
      }
    }
  },

  vote:(id, token) => {
    return async(dispatch, getState) => {
      try {
        const res = await axios.post('http://localhost:4000/api/vote', {id}, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        })
        dispatch({type: 'LIKE', payload: res.data})
        console.log(res.data)
      } catch(error){
        console.log(error)
      }
    }
  },

  dismissVote:(id, token) => {
    return async(dispatch, getState) => {
      try {
        const res = await axios.put('http://localhost:4000/api/vote', {id}, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        })
        dispatch({type: 'LIKE', payload: res.data})
        console.log(res.data)
      } catch(error){
        console.log(error)
      }
    }
  }
}

export default bookActions