import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likesCount: 13},
                {id: 2, message: 'I want to die', likesCount: 189},
            ],

            newPostText: ''

        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nastya'},
                {id: 2, name: 'O mina'},
                {id: 3, name: 'Dota2'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Katya'},
                {id: 6, name: 'Liza'},
            ],

            messages: [
                {id: 1, message: 'Hi cutie'},
                {id: 2, message: 'Im here'},
                {id: 3, message: 'Dota2'},
                {id: 4, message: 'Im playing dota'},
                {id: 5, message: 'Do u have friends?'},
            ],

            newMessageBody: ''
        },

        sidebar: {

        }


    },
    _callSubscriber() {
        console.log("State is changed");
    },

    getState(){
        return this._state;
    },
    subscribe(observer)  {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });



export default store;
window.store = store;