const res = require('express/lib/response');

module.exports = function(app){

    app.get('/noticia', function(req,res){

        var connection = app.config.dbConnection();
        var noticiaModel = new app.app.models.noticiasModel;

        noticiaModel.getNoticia(connection, function(error, result){
            res.render('noticias/noticia.ejs', {noticia : result});
             }); 

    });
    
};