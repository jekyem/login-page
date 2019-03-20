import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import ejs from 'ejs';

import router from './routes/login';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('views',__dirname+'/views/');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname+'/public/'));

app.use('/',router);

app.listen(8080, () => console.log("Listeniddng on port 8080!"));