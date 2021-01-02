import cubeReducer from './cube'
import authReducer from './auth'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
        cube : cubeReducer,
        auth : authReducer
    })

export default rootReducer