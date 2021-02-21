const initialState = {
    loggedUser: null
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER': //para cuando el usuario va a crear una cuenta o a loguearse
        localStorage.setItem('token', action.payload.response.token)
            return {
                ...state,
                loggedUser:action.payload.response
            }
        case 'LOG_OUT_USER' :
            localStorage.clear()
            return {
                ...state,
                loggedUser: null
            }
        default:
            return state
    }
}

export default authReducers