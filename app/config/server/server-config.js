
let args = require('optimist').argv;
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let cors = require('cors');
let express = require('express');
let HttpStatus = require('http-status-codes');
let logger = require('morgan');
let mongoose = require('mongoose');
let path = require('path');

let palindromeRoute = require('../../modules/palindrome').palindromeRoute;

let app = express();


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/private/*', (req, res, next) => {

    const API_TOKEN = "api-token";

    let apiToken = args[API_TOKEN];
    let token = req.header(API_TOKEN);
    if (!apiToken || token == apiToken) {
        next();
    } else {
        res.status(HttpStatus.UNAUTHORIZED)
            .json({message: 'Your app is not allowed to consume this webservice'});
    }
});


app.use('/palindrome', palindromeRoute);

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send();
});

module.exports = app;
