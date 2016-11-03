const express = require('express');
// const home = require('../app/routes/home');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const load = require('express-load');
const bodyParser = require('body-parser');
const helmet = require('helmet');
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
    app.use(helmet.frameguard());
    app.use(helmet.xssFilter());
    app.use(helmet.noSniff());
    app.disable('x-powered-by');
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes/auth.js')
        .then('routes')
        .into(app);

    app.get('*', function(req, res){
        res.status(404).render('404');
    });
    return app;
};