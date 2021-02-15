const initialState = {
  book:{}
}

const bookReducers = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_BOOK':
      return {
        book: action.payload
      }
    default:
      return state
  }
}

export default bookReducers