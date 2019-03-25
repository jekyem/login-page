import express from 'express';
const router = express.Router();

router.get('/',(req,res) => {
    if(req.session.logined)
        res.render('todo.html');
    else
        res.redirect('/login');
})

export default router;