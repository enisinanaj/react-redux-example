import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app.actions'


function Title(props) {

    useEffect(() => {
        console.warn("Language changed for component Title");
    }, [props.applicationState.ln])

    const {user} = props.applicationState;

    if (props.applicationState.ln == 'en-US') {
        return <p>
            Edit <code>src/App.js</code> and save to reload.
            <br />
            { user && 
                <span>
                    Welcome to the world baby {user.firstname} {user.lastname}, born on {user.birthday.toDateString()}
                </span>
            }
        </p>;
    } else if (props.applicationState.ln == 'de-AT') {
        return <p>
            Das ist Deutsch
            <br />
            { user && 
                <span>
                    Wilkomen {user.firstname} {user.lastname}, something_here {user.birthday.toDateString()}
                </span>
            }
        </p>;
    }
}

function mapStateToProps(state) {
    return {
        applicationState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Title);