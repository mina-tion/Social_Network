import st from './Post.module.css';

const Post = (props) => {
    return (

        <div className={st.item}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>
            {props.message}
            <div>
                <span>{props.likesCount} like</span>
            </div>


        </div>

    )
}
export default Post;