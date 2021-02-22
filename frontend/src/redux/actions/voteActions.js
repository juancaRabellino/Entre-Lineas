import axios from 'axios'

const voteActions = {
  vote: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('https://entrelineas.herokuapp.com/api/vote', {id}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'VOTE', payload: response.data})
      }catch(error){
        Swal.fire({
          icon: 'error',
          title: '¡Lo siento!',
          text: "No se puede votar en este momento, intente mas tarde.",
          showConfirmButton: false,
          timer: 4000
          })
      }
    }
  },
  dismissVote: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('https://entrelineas.herokuapp.com/api/dismissvote', {id}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
        dispatch({type: 'DISMISS_VOTE', payload: response.data})
      }catch(error){
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          title: '¡Lo siento!',
          text: "No se puede sacar el voto en este momento, intente mas tarde.",
          showConfirmButton: false,
          timer: 4000
          })
      }
    }
  }
}

export default voteActions