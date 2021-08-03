import styles from "./Users.module.css";
import userAvatar from "../../assets/images/unknown.png";
import React from "react";

const Users = (props) => {

    if (props) {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}
            </div>

            {
                props.users.map(u => (<div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userAvatar}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.toggleFollow(u.id, false)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.toggleFollow(u.id, true)
                                }}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>))
            }
        </div>
    }
}

export default Users;
