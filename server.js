'use strict';
//
const http = require('http');
const app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server rodando na porta ' + app.get('port'));
});