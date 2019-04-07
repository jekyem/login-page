import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';
import ejs from 'ejs';

import loginPage from './routes/login';
import todoPage from './routes/todo';
import api from './api/api';

class Server {
    constructor(){
        this.server = express();
        this.port = 8080;

        this.addMiddleware();
        this.setView();
        this.setRouter();
    }

    addMiddleware = () => {
        this.server.use(morgan('dev'));
        this.server.use(bodyParser.json());
        this.server.use(session({
            secret: 'lasdjfkl',
            resave: false,
            saveUninitialized: true
        }));
    }

    setView = () => {
        this.server.set('views',__dirname+'/views');
        this.server.set('view engine', 'ejs');
        this.server.engine('html', ejs.renderFile);
        this.server.use(express.static(__dirname+'/public/'));        
    }

    setRouter = () => {
        this.server.use('/', todoPage);
        this.server.use('/login', loginPage);
        this.server.use('/api',api);
    }

    start = () => {
        this.server.listen(this.port);
    }
}

export default new Server();