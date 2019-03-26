import express from 'express';
import 'babel-polyfill';

import UserCollection from './../mongo/UserCollection';

const router = express.Router();

router.get('/' , function(req,res){
    if(req.session.logined)
        res.redirect('/');
    else
        res.render('login.html');
});

router.post('/', async function(req,res){
    const result = await loginAuthenticate(req.body.id, req.body.password) 
    
    if(result)
        req.session.logined = true;
    res.send(result);
});

const loginAuthenticate = async function(id,pw) {
    const user = await UserCollection.getUser(id);
    return user && user.password === pw;
}

export default router;