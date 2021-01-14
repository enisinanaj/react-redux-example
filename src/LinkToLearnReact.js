import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app.actions'

function LinkToLearnReact(props) {

    useEffect(() => {
        console.warn("language is: " + props.applicationState.ln);
        props.actions.changeLanguage("de-AT");
    }, []);

    useEffect(() => {
        console.warn("language is: " + props.applicationState.ln);
    }, [props.applicationState.ln])

    if (props.applicationState.ln === "de-AT") {
        return "Ja!"
    }

    return <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
    </a>;

}

// export default LinkToLearnReact

function mapStateToProps(state) {
    return {
        applicationState: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LinkToLearnReact);