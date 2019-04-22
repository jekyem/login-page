import 'babel-polyfill';
import React, {Component} from 'react';

import './SignUpForm.css';
import Encryption from '../../../encryption/Encryption';
import IDVarficator from './varficator/IDVarficator';
import PWVarficator from './varficator/PWVarficator';
import Axios from 'axios';

export default class SignUpFrom extends Component {
    constructor(props){
        super(props);

        this.state = {
            userID:'',
            password:'',
            rePassword:''
        }
    }

    handleRegister = async () => {
        const [resultOfVarficate, errMsg] = this.varificateInput();
        if(resultOfVarficate === false){
            alert(errMsg);
            this.setState({
                ...this.state,
                password:'',
                rePassword:''
            });
            return;
        }

        const data = {
            id:this.state.userID,
            password:this.state.password
        }

        const publicKey = (await Axios.get('/api/auth/key/public')).data;
        const aesKey = Encryption.getRandomValue();
        const encryptedData = Encryption.encryptionAES(JSON.stringify(data),aesKey);
        const encryptedAseKey = Encryption.encryptionRSA(aesKey,publicKey);

        const res = await Axios.post('/api/users',{data:encryptedData, key:encryptedAseKey});
        if(res.data === 'OK'){
            alert('회원가입이 완료 되었습니다.');
            this.props.showSignUp(false);
        } else {
            this.setState({
                ...this.state,
                password:'',
                rePassword:''
            });
            alert(`회원가입 실패\n\t${res.data}`);
        }
    }

    varificateInput = () => {
        let result, msg;
        
        [result, msg]= (new IDVarficator()).varificate({userID:this.state.userID});
        if(result !== true)
            return [result, msg];

        [result, msg] = (new PWVarficator()).varificate({password:this.state.password, rePassword:this.state.rePassword});
        if(result !== true)
            return [result, msg];

        return [true];
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        });
    }

    render(){
        return(
            <div className="signup-form">
                <div className="signup-title"> 회원가입 </div>
                <div className="signup-input"> 
                    <input
                        placeholder="User ID (E-Mail)"
                        name="userID"
                        value={this.state.userID}
                        onChange={this.handleChange}
                    />
                    <div className="notice">
                        *사용중인 Email입력
                    </div>
                </div>
                <div className="signup-input">
                    <input
                        type="password"
                        placeholder="비밀번호"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div className="notice">
                        *숫자와 특수문자를 포함, 6자리 이상
                    </div>
                </div>
                <div className="signup-input">
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        name="rePassword"
                        value={this.state.rePassword}
                        onChange={this.handleChange}
                    />
                    <div className="notice">
                        *비밀번호 한 번 더 입력
                    </div>
                </div>
                <button
                    className="signup-register btn btn-primary"
                    onClick={this.handleRegister}
                >
                    완료
                </button>
                <div className="signup-cancel" onClick={()=>(this.props.showSignUp(false))}/>
            </div>
        );
    }
}