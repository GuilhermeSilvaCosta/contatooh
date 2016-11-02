const express = require('express');
// const home = require('../app/routes/home');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const load = require('express-load');
const bodyParser = require('body-parser');
module.exports = function(){
    const app = express();
    app.set('port',3000);
    app.set('view engine', 'ejs');
    app.set('views','./app/views');    
    // middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({
        secret: 'homem avestruz',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes/auth.js')
        .then('routes')
        .into(app);
    return app;
};