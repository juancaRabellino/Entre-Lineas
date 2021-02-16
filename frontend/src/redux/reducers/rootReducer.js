import { combineReducers } from "redux"
import bookReducers from './bookReducers'
import authReducers from './authReducer'

const rootReducer = combineReducers({
  bookR: bookReducers,
  auth:authReducers

})

export default rootReducer