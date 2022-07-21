import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidbarReducer'
import profileReducer from './profileReducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: '0' },
                { id: 2, message: "It's my first post", likesCount: '24' },
                { id: 3, message: 'WOW!', likesCount: '999' }
            ],
            newPostText: 'Place for your post!'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Bob' },
                { id: 2, name: 'Petya' },
                { id: 3, name: 'Alex' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'WOW!' }
            ],
            newMessageBody:"",
        },
        sidebar:{}
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)

        this._callSubscriber(this._state)
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store

window.state = store