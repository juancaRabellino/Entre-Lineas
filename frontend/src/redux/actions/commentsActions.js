import axios from 'axios'
import Swal from'sweetalert2';
// import {API} from '../../Api'

const commentActions = {
    addComment:(content, id, token) => {
      return async (dispatch, getState) => {
        try {
          const res = await axios.post(`https://entrelineas.herokuapp.com/comments`, {content, id, token}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
          dispatch({type: 'ADD_COMMENT', payload: res.data.respuesta})
          return true
        } catch(error){
          Swal.fire({
            icon: 'error',
            title: '¡Lo siento!',
            text: "No se pudo enviar el comentario",
            showConfirmButton: false,
            timer: 4000
            })
        }
      }
    },
  
    deleteComment: (id, idcomment, token) => {
      return async(dispatch, getState) => {
        try {
          const res = await axios.put(`https://entrelineas.herokuapp.com/comments/delete`, {id, idcomment}, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
          dispatch({type: 'DELETE_COMMENT', payload: res.data.respuesta})
        } catch(error){
          Swal.fire({
            icon: 'error',
            title: '¡Lo siento!',
            text: "No se pudo borrar el comentario, intente mas tarde.",
            showConfirmButton: false,
            timer: 4000
            })
        }
      }
    },
  
    modComment: (value, idcomment, id, token) => {
      return async (dispatch, getState) => {
        try{
          const res = await axios.put(`https://entrelineas.herokuapp.com/comments`, {value, idcomment, id}, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
          dispatch({type: 'UPDATE_COMMENT', payload: res.data.respuesta})
        } catch(error){
          Swal.fire({
            icon: 'error',
            title: '¡Lo siento!',
            text: "No se pudo editar el comentario, intente mas tarde.",
            showConfirmButton: false,
            timer: 4000
            })
        }
      }
    },
}

export default commentActions