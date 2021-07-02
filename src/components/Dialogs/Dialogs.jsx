import st from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {



    let dialogElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages.map((message) => <Message message={message.message}/>);

    let newMessageElement = React.createRef();
    let addMessage = ( ) => {
        let text = newMessageElement.current.value;
    }

    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                { dialogElements }
            </div>
            <div className={st.messages}>
                { messagesElements }
                <div>
                    <div>
                        <textarea ref={ newMessageElement }></textarea>
                    </div>
                    <div>
                        <button onClick={ addMessage }>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;