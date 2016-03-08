var mysql = require('mysql'); 

var configDB = mysql.createConnection({
        host: '24.11.219.105',
        user: 'admin',
        password: 'password',
        database: 'project_ali',
        //delete the port and change password before pushing
        port: 3306
});
configDB.connect();

module.exports = configDB;
~                              
