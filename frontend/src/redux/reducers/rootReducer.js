import { combineReducers } from "redux"
<<<<<<< HEAD
import authReducers from './authReducer'

const rootReducer = combineReducers({
    auth:authReducers
=======
import bookReducers from './bookReducers'

const rootReducer = combineReducers({
  bookR: bookReducers
>>>>>>> f47e040fd5e01a4a34a853d6b6215e026b14d353
})

export default rootReducer