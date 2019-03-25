import React, {Component} from 'react'
import axios from 'axios';

import './Login.css';

export default class LoginPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            id:'',
            password:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        });
    }

    handleSubmit() {
        axios({
            method:'post',
            url:'/login/session',
            data:{
                id:this.state.id,
                password:this.state.password
            }
        })
        .then(res => {
            if(res.data === 'ok')
               window.location = '/';
            else
                console.log('실패');
        })
        .catch((error) => {
        });
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
                            onClick={this.handleSubmit}
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