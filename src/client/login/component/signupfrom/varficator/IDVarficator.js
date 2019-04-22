import Varficator from "./Varificator";

export default class IDVarficator extends Varficator {
    varificate = (data) => {
        const {userID} = data;

        if(this.isThereSpace(userID) === true)
            return [false, 'ID에 공백을 빼주세요'];
        if(this.idIsBlank(userID) === true)
            return [false, 'ID를 입력하세요'];
        if(this.idIsEmail(userID) === false)
            return [false, 'ID에 Email을 입력하세요(xxx@xxx.xxx)'];
        return [true]
    }
    
    isThereSpace = (userID) => {
        return userID.indexOf(' ') !== -1;
    }

    idIsBlank = (userID) => {
        return userID === '';
    }

    idIsEmail = (userID) => {
        const EmailRegExp = /^[^@]+@[^@]+$/;
        return EmailRegExp.exec(userID) !== null;
    }
}