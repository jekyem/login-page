import React, {Component} from 'react';

import './SignUpForm.css';

export default class SignUpFrom extends Component {
    render(){
        return(
            <div className="signup-form">
                <div className="signup-title"> 회원가입 </div>
                <button onClick={()=>(this.props.showSignUp(false))}>X</button>
                <div className="signup-input"> <input placeholder="아이디 (Email)"/> </div>
                <div className="signup-input"> <input placeholder="비밀번호 (6자리 이상, 특수문자 포함)"/> </div>
                <div className="signup-input"> <input placeholder="비밀번호 확인 (비밀전호 한 번 더 입력)"/> </div>
                <button>회원가입</button>
                {/* 증명하세요 */}
            </div>
        );
    }
}