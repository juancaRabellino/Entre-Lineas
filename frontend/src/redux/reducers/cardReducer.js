//Inicialize the state
const initialState = {
    genres: []
}

const cardReducer =  (state = initialState, action) => {
    switch(action.type){
        case 'GET_CARDS_GENRES':{
            return{
                genres: action.payload
            }
        }
        default:
            return state
    }
}

export default cardReducer