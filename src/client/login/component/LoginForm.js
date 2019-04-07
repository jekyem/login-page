import React, {Component} from 'react';
import axios from 'axios';

import './LoginForm.css';
import Encryption from '../../encryption/Encryption';

export default class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            id:'',
            password:'',
            alert:''
        };
    }

    handleChangeID = (e) => {
        this.setState({
            ...this.state,
            id:e.target.value
        })
    }

    handleChangePW = (e) => {
        this.setState({
            ...this.state,
            password:e.target.value
        });
    }

    handleSubmit = () => {
        const data = {
            id:this.state.id,
            password:this.state.password
        }
        
        const key = Encryption.getRandomKey();
        const encryptedData = Encryption.encryptionAES(JSON.stringify(data),key);

        var self = this;
        axios({
            method:'post',
            url:'/api/auth/login',
            data:{
                key:key,
                data:encryptedData
                // id:this.state.id,
                // password:this.state.password
            }
        })
        .then(res => {
            if(res.data)
                window.location = '/';
            else{
                alert('로그인 실패');
                self.setState({
                    ...this.state,
                    alert:'로그인에 실패 했습니다.'
                });
            }
        });
    }

    render() {
        return (
            <div className="login-form">
                <div className="login-title"> Welcome </div>
                <div className="login-input">
                    <input 
                        type="text"
                        placeholder="Email Address"
                        value={this.state.id}
                        onChange={this.handleChangeID}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChangePW}
                    />
                </div>
                <div className="login-additonal-tool">
                    <div className="login-save">
                        <input type="checkbox"/> 아이디 저장
                    </div>
                    <div className="login-alert">
                        {this.state.alert === ''? '' : `* ${this.state.alert}` }
                    </div>
                </div>
                <button
                    className = "login-button btn btn-primary"
                    onClick={this.handleSubmit}
                >
                    로그인
                </button>
                <button 
                    className="login-register btn btn-secondary"
                    onClick={() => {this.props.showSingUp(true)} }
                >
                    회원가입
                </button>
            </div>
        );
    }
}