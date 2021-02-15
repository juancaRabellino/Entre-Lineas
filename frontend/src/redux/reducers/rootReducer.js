import { combineReducers } from "redux"
<<<<<<< HEAD
<<<<<<< HEAD
import authReducers from './authReducer'

const rootReducer = combineReducers({
    auth:authReducers
=======
import bookReducers from './bookReducers'

const rootReducer = combineReducers({
  bookR: bookReducers
>>>>>>> f47e040fd5e01a4a34a853d6b6215e026b14d353
=======
// import bookReducers from './bookReducers'
import authReducers from './authReducer'

const rootReducer = combineReducers({
  // bookR: bookReducers,
  auth:authReducers
>>>>>>> db0f62113d9ad54bee3105931dbcedf55cd02d43
})

export default rootReducer