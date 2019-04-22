import Varficator from "./Varificator";

export default class PWVarficator extends Varficator {
    varificate = (data) => {
        const {password, rePassword} = data;
        
        if(this.isThereSpace(password) === true)
            return [ false, 'Password에 공백을 빼주세요'];
        if(this.passwordIsComplicated(password) === false)
            return [ false, 'Password가 너무 간단합니다' ];
        if(this.isEqual(password, rePassword) === false)
            return [ false, 'Password가 서로 다릅니다'];
        return [true]
    }

    isThereSpace = (password) => {
        return password.indexOf(' ') !== -1;
    }

    passwordIsComplicated = (password) => {
        const {lowerAlphabet, upperAlphabet, specialLetter, number} = this.countLetter(password);

        if(password.length < 6)
            return false;
        if(specialLetter < 1)
            return false;
        if(number < 1)
            return false;
        return true;
    }

    countLetter = (word) => {
        let lowerAlphabet = 0;
        let upperAlphabet = 0;
        let specialLetter = 0;
        let number = 0;

        for(let i=0;i<word.length;i++)
        {
            if('a' <= word.charAt(i) && word.charAt(i) <= 'z')
                lowerAlphabet++;
            else if('A' <= word.charAt(i) && word.charAt(i) <= 'Z')
                upperAlphabet++;
            else if('0' <= word.charAt(i) && word.charAt(i) <= '9')
                number++;
            else
                specialLetter++;
        }

        return {lowerAlphabet, upperAlphabet, specialLetter, number}
    }

    isEqual = (password, repassword) => {
        return password === repassword;
    }
}