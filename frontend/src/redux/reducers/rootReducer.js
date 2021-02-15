import { combineReducers } from "redux"
import bookReducers from './bookReducers'

const rootReducer = combineReducers({
  bookR: bookReducers
})

export default rootReducer