import "babel-polyfill"
import express from 'express';

import UserCollections from '../mongo/UserCollection';
import Encryption from '../encryption/Encryption';

const router = express.Router();

router.get('/',function(req,res){
    res.status(200).send('hi');
});

router.post('/',async function(req,res){

    const {id, password} = decryptionRegisterData(req.body.data, req.body.key);
    const [resultOfCheckValidation, errMsg] = await checkValidation(id,password);

    if(resultOfCheckValidation === false){
        res.status(200).send(errMsg);
        return;
    }

    try{
        await registerUser(id, password);
        res.status(200).send('OK');
    }catch(error){
        console.log(error);
        res.status(500).send();
    }    
});

const checkValidation = async (id, password) => {
    const user = await UserCollections.getUser(id);

    if(user !== null)
        return [false,'이미 등록된 사용자 입니다.'];
    return [true];
}

const decryptionRegisterData = (data, key) => {
    const aesKey = Encryption.decryptionPrivateRSA(key);
    return JSON.parse(Encryption.decryptionAES(data,aesKey));
}

const registerUser = async (id, password) => {
    const {encryptedPassword, salt} = encryptPassword(password);
    const userData = {
        id:id,
        password:encryptedPassword,
        salt:salt
    };
    await UserCollections.addUser(userData)
}

const encryptPassword = (password) => {
    const salt = Encryption.getRandomValue();
    return {
        encryptedPassword: Encryption.makeHash(password,salt),
        salt: salt
    };
}

export default router;