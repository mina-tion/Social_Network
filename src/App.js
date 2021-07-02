import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom"

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavigationBar/>
            <div className='app-wrapper-content'>
                {/*<Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>*/}
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}
                                                    />}
                />
            </div>
        </div>

    )
}

export default App;
