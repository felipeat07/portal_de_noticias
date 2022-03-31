const res = require('express/lib/response');

module.exports = function(application){

    application.get('/noticias', function(req,res){

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticias.ejs', {noticias : result});
        });

    });
    
};