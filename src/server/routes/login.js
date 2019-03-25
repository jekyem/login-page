import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import 'babel-polyfill';

const router = express.Router();

router.get('/' , function(req,res){
    if(req.session.logined)
        res.redirect('/');
    else
        res.render('login.html');
});

router.post('/session', async function(req,res){
    if(await checkUser(req.body.id, req.body.password)){
        req.session.logined = true;
        res.send('ok');
    }
    else
        res.send('fail');
});

const checkUser = async function(id,pw) {
    await mongoose.connect('mongodb://localhost/todo-list').then(console.log('connect'));

    const userSchema = new mongoose.Schema({
        id: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    });

    const User = mongoose.model('user', userSchema);

    User.find({"id":"aaa"}, function(err, todo) {
        if(err) throw err;
        console.log("ccc");
        console.log(todo);
    });

    if(id === 'aaa' && pw === 'bbb')
        return false;
    else
        return false;
}

export default router;