import express from 'express';

const router = express.Router();

router.get('/' , function(req,res){
    if(req.session.logined)
        res.redirect('/');
    else
        res.render('login.html');
});

export default router;