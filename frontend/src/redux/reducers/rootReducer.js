import { combineReducers } from "redux"
<<<<<<< HEAD
import bookReducers from './bookReducers'

const rootReducer = combineReducers({
  bookR: bookReducers
=======
import authReducers from './authReducer'

const rootReducer = combineReducers({
    auth:authReducers
>>>>>>> 950e769f029c11a92f0d875202bf4c290d5054ce
})

export default rootReducer