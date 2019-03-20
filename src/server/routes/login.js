import express from 'express';
const router = express.Router();

router.get('/' , function(req,res){
    res.render('login.html');
});

router.get('/test', function(req, res){
    res.send('aa');
});

export default router;