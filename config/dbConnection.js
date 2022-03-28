var mysql = require('mysql');

var connMYSQL = function(){
    console.log('Conexão com BD foi estabelecida');
     return mysql.createConnection({
            host : 'localhost',
            user :  'root',
            password : '1234',
            database : 'portal_de_noticias'
        });
};


module.exports = function(){
    console.log('O autoload carregou o modulo de conexão com o BD');
    return connMYSQL;
};