const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likesCount: 13},
                {id: 2, message: 'I want to die', likesCount: 189},
            ],

            newPostText: 'it-nastenkf'

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
            ]
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


/*    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 8
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/

    dispatch(action) {
        if(action.type === ADD_POST)
        {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 8
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT)
        {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default store;
window.store = store;