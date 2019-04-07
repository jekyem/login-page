import express from 'express';
import 'babel-polyfill';

import UserCollection from '../../mongo/UserCollection';
import Encryption from '../../encryption/Encryption';

const router = express.Router();

router.post('/', async (req,res) => {
    const data = JSON.parse(Encryption.decryptionAES(req.body.data,req.body.key));

    const result = await loginAuthenticate(data.id, data.password);
    
    if(result)
        req.session.logined = true;
    res.status(200).send(result);
});

const loginAuthenticate = async (id,pw) => {
    const user = await UserCollection.getUser(id);
    return user && user.password === pw;
}

export default router;