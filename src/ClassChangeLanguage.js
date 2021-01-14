class ChangeLanguage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedInUser: {
                username: "john.doe",
                firstname: "John",
                lastname: "Doe",
                birthday: new Date()
            }
        }
    }

    updateLastname(e) {
        this.setState({
            loggedInUser: {
                ...loggedInUser, 
                lastname: e.target.value
            }
        })
    }

    render() {
        return <div>
            <button onClick={() => {this.props.actions.changeLanguage("en-US")}} >English</button>
            <button onClick={() => {this.props.actions.changeLanguage("de-AT")}} >German</button>

            <input 
                type="text" 
                placeholder={"lastname"} 
                onChange={e => this.updateLastname(e)} 
            />
            
            <button onClick={() => {this.props.actions.storeUserData(loggedInUser)}} >Login</button>
        </div>;
    }

}

const mapStateToProps = state => ({applicationState: state});
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);