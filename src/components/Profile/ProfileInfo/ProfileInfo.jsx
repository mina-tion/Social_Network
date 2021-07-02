import st from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://st4.depositphotos.com/16149430/21106/i/600/depositphotos_211065786-stock-photo-sky.jpg'/>
            </div>
            <div className={st.descriptionBlock}>
                avatar + info
            </div>

        </div>
    )
}
export default ProfileInfo;