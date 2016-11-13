'use strict';

const config = require('./config/config')();
const http = require('http');
const app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')(config.db);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server rodando na porta ' + app.get('port'));
});