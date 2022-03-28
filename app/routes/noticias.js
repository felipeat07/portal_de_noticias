const res = require('express/lib/response');

module.exports = function(app){

    app.get('/noticias', function(req,res){

        var connection = app.config.dbConnection();

        connection.query('select * from noticias', function(error, result){
            res.render('noticias/noticias.ejs', {noticias : result});
        });

    });
    
};