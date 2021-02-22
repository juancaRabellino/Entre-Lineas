import { combineReducers } from "redux"
import bookReducers from './bookReducers'
import authReducers from './authReducer'
import cardReducer from './cardReducer'

const rootReducer = combineReducers({
  bookR: bookReducers,
  auth: authReducers,
  cardR: cardReducer
})

export default rootReducer