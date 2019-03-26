import express from 'express';

import UserCollections from '../mongo/UserCollection';

const router = express.Router();

router.get('/',function(req,res){
    res.status(200).send('hi');
});

router.post('/',async function(req,res){
    const userData = {
        id:req.body.id,
        password:req.body.password
    };
    
    if(await UserCollections.addUser(userData))
        res.status(200).send();
    else
        res.status(500).send();
});

export default router;