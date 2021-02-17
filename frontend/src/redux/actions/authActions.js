import axios from 'axios'

const authActions = {
    makeNewUser: (usuario) => {
        console.log(usuario)
        return async (dispatch) => {
            try {
                const respuesta = await axios.post('http://localhost:4000/api/user/signup', usuario)///esto viaja al backend, va a router, busca la ruta
                if(!respuesta.data.success){
                    return respuesta.data
                } 
                dispatch({type: 'LOG_USER', payload: respuesta.data})//lo que ma contesto el backend se lo mando al reducers
                console.log(respuesta.data)
            }catch(error){
                console.log(error)
            }
        }
    },

    logInUser: user => {
        console.log(user)
        return async (dispatch) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/signin',user)
            if(!respuesta.data.success) return respuesta.data;
            dispatch({type: 'LOG_USER', payload: respuesta.data})
            console.log(respuesta.data)
        }
    },

    modifyUser: userToEdit => {
        const userId = userToEdit._id
        return async (dispatch, getState) => {
            const response = await axios.put(`http://localhost:4000/api/settings/${userId}`, {
                headers: { 
                    Authorization: `Bearer ${userToEdit.token}` 
                }
            })
            dispatch({success: true, response: response.data})
        }
    },
    logFromLS: (token) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.post('http://localhost:4000/api/user/ls/', {token}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({type: 'LOG_USER', payload: response.data})
            }catch(error){
                console.log(error)
                if(error.response.status === 401) {
                    alert("No tienes permitido ingresar a la web")
                    localStorage.clear()
                    return true
                }
            }
        }
    },
    logOutUser: () => { //se usa en el header
        return async (dispatch) => {
            dispatch({type:'LOG_OUT_USER'})
        }
    },
}
export default authActions