import axios from 'axios'


const commentActions = {
    addComment:(content, id, token) => {
      return async (dispatch, getState) => {
        try {
          const res = await axios.post('http://localhost:4000/api/comments', {content, id, token}, {
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
          const res = await axios.put('http://localhost:4000/api/comments', {value, idcomment, id}, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
          dispatch({type: 'UPDATE_COMMENT', payload: res.data.respuesta})
          console.log(res)
        } catch(error){
          console.log(error)
        }
      }
    },
}

export default commentActions