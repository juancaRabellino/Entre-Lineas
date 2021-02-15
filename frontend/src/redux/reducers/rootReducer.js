import { combineReducers } from "redux"
import authReducers from './authReducer'
import bookReducers from './bookReducers'

const rootReducer = combineReducers({
  // bookR: bookReducers,
  auth:authReducers
})

export default rootReducer