var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config()

require('./models/setupMongo')();




var todoRouter = require('./routes/todo');
var authRouter = require('./routes/auth');
var userRouter = require('./routes/user')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/todo', todoRouter);
app.use('/user', userRouter);

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



module.exports = app;