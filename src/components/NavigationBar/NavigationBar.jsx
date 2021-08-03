import st from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";


const NavigationBar = () => {
    return (
        <nav className={st.nav}>
            <div className={st.item}>
                <NavLink to='/profile' activeClassName={st.active}>Profile</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}
export default NavigationBar;