import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/store";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    }

    return (
       <Dialogs updateNewMessageBody = {onNewMessageChange}
                sendMessage = {onSendMessageClick}
                dialogsPage = {state}
       />
    )
}

export default DialogsContainer;