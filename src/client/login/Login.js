import React, {Component} from 'react'

import LoginForm from './component/loginform/LoginForm';
import SignUpForm from './component/signupfrom/SignUpForm';

export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            showSingUp:false
        }
    }

    showSignUp = (showView) => {
        this.setState({
            showSingUp:showView
        })
    }

    render() {
        return (
            <div>
                {
                (!this.state.showSingUp)?
                    <LoginForm showSingUp={this.showSignUp} />
                :
                    <SignUpForm showSignUp={this.showSignUp} />
                }
            </div>
        );
    }
}