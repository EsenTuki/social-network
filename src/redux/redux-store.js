import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidbarReducer'
import usersReducer from './UsersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store