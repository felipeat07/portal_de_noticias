var dbConnection = require('../../config/dbConnection')

const res = require('express/lib/response');

module.exports = function(app){

    var connection = dbConnection();

    app.get('/noticias', function(req,res){

        connection.query('select * from noticias', function(error, result){
            res.render('noticias/noticias.ejs', {noticias : result});
        });

    });
};