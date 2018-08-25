import React, {Component, Fragment} from 'react';
import Login from './Login';
import Signup from "./Signup";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";

class App extends Component {

    render() {
        return (
            <div>
                <Login/>
            </div>
        )
    }
}

export default App;
