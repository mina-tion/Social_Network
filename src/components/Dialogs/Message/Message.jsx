import st from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={st.message}>{props.message}</div>
    )
}

export default Message;