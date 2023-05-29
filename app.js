let userController = require('./server/controller/userController');
let express = require('express');
let cors = require('cors');
//let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes');
let usersRouter = require('./routes/users');
const bodyParser = require("body-parser");

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'client')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', userController);

module.exports = app;