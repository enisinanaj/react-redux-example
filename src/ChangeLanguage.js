import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app.actions';

function ChangeLanguage(props) {

    const [loggedInUser, setLoggedInUser] = useState({
        username: "john.doe",
        firstname: "John",
        lastname: "Doe",
        birthday: new Date()
    });

    return <div>
        <button onClick={() => {props.actions.changeLanguage("en-US")}} >English</button>
        <button onClick={() => {props.actions.changeLanguage("de-AT")}} >German</button>
        <input 
            type="text" 
            placeholder={"lastname"} 
            onChange={e => setLoggedInUser({...loggedInUser, lastname: e.target.value})} 
        />
        <button onClick={() => {props.actions.storeUserData(loggedInUser)}} >Login</button>
    </div>
}


const mapStateToProps = state => ({applicationState: state});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);