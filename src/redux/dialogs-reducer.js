const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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

    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    if(action.type === UPDATE_NEW_MESSAGE_BODY)
    {
        state.newMessageBody = action.body;

    } else if(action.type === SEND_MESSAGE)
    {
        let body = state.newMessageBody;
        state.messages.push({id: 6, message: body});
        state.newMessageBody = '';
    }


    return state;
}

export default dialogsReducer;