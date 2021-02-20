import axios from 'axios'

const voteActions = {
  vote: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/vote', {id}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type: 'VOTE', payload: response.data})
      }catch(error){
        console.log(error)
      }
    }
  },
  dismissVote: (id, token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post('http://localhost:4000/api/dismissvote', {id}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
        dispatch({type: 'DISMISS_VOTE', payload: response.data})
      }catch(error){
        console.log(error)
      }
    }
  }
}

export default voteActions