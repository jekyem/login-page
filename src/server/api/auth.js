import express from 'express';
import 'babel-polyfill';

import UserCollection from './../mongo/UserCollection';

const router = express.Router();

router.post('/login', async (req,res) => {
    const result = await loginAuthenticate(req.body.id, req.body.password) 
    
    if(result)
        req.session.logined = true;
    res.status(200).send(result);
});

const loginAuthenticate = async (id,pw) => {
    const user = await UserCollection.getUser(id);
    return user && user.password === pw;
}

export default router;