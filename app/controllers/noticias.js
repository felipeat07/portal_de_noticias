module.exports.noticias = function(application, req, res){

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, function(error, result){
        res.render('noticias/noticias.ejs', {noticias : result});
    });

}

module.exports.noticia = function(application, req, res){

    var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function(error, result){
             res.render('noticias/noticia.ejs', {noticia : result});
        });
        
}