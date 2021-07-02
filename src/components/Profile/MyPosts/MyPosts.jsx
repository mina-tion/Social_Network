import st from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {

    /*    let postsData = [
            {id: 1, message: 'Hello world!', likesCount: 13},
            {id: 2, message: 'I want to die', likesCount: 189},
        ]*/

    let postsElements = props.postsData.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={st.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>

        </div>
    )
}
export default MyPosts;