import axios from 'axios'

const cardActions = {
    getCardsCategories: () => {
        return async (dispatch, getState) => {
            try{
                const responseCategories = await axios.get('http://localhost:4000/api/genre')
                dispatch(
                    {
                        type: 'GET_CARDS_GENRES',
                        payload: responseCategories.data.response
                    }
                )
            }catch(err){
                console.log(err)
            }
        }
    }
}

export default cardActions