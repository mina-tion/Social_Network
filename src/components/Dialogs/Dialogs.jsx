import st from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = state.messages.map((message) => <Message message={message.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                { dialogElements }
            </div>
            <div className={st.messages}>
               <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  placeholder='Enter your message'
                                  onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;