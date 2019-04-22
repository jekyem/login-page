import express from 'express';
import 'babel-polyfill';

import UserCollection from '../../mongo/UserCollection';
import Encryption from '../../encryption/Encryption';

const router = express.Router();

router.post('/', async (req,res) => {
    const aesKey = Encryption.decryptionPrivateRSA(req.body.key);
    const loginData = JSON.parse(Encryption.decryptionAES(req.body.data,aesKey));

    const result = await loginAuthenticate(loginData.id, loginData.password);
    
    if(result)
        req.session.logined = true;
    res.status(200).send(result);
});

const loginAuthenticate = async (id,pw) => {
    const user = await UserCollection.getUser(id);
    return (user !== null && user.password === Encryption.makeHash(pw,user.salt));
}

export default router;