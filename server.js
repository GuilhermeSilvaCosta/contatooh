'use strict';

const config = require('./config/config')();
const http = require('http');
const app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')(config.db);

http.createServer(app).listen(config.port, config.address, function(){
    console.log('Express Https Server ' + config.address + 
                '(' + config.env + ') escutando na porta ' + config.port);
});