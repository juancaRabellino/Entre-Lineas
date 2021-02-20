const initialState = {
    vote: {}
  }
  
  const voteReducer = (state = initialState, action) => {
    switch(action.type){
      case 'VOTE':
        return {
          ...state,
          vote: action.payload
        }
      case 'DISMISS_VOTE':
        return {
          ...state,
          vote: action.paylaod
        }
      default: 
      return state
    }
  }
  
  export default voteReducer