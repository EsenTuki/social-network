import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidbarReducer'
import usersReducer from './UsersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store