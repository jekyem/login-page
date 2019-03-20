import React, {Component} from 'react'
import './Login.css';

export default class LoginPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            id:'',
            password:''
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleOnlogin=this.handleOnlogin.bind(this);
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        });
    }

    handleOnlogin() {
        console.log('로그인 시도');
    }

    render() {
        return (
            <div class="login container">
                <div class="login-from">
                    <div class="login-title"> Login Page </div>
                    <div class="login-input">
                        <input 
                            type="text"
                            placeholder="Email Address"
                            value={this.state.id}
                            name="id"
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="login-button">
                        <input type="checkbox"/> Remember me
                        <button
                            onClick={this.handleOnlogin}
                        >Login</button>
                    </div>
                    <div class="login-register">
                        회원가입
                    </div>
                </div>
            </div>
        );
    }
}