const express = require('express');
const home = require('../app/routes/home');
const load = require('express-load');
const bodyParser = require('body-parser');
module.exports = function(){
    var app = express();
    app.set('port',3000);
    // middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.set('view engine', 'ejs');
    app.set('views','./app/views');
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);
    return app;
};