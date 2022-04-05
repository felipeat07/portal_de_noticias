module.exports = function(application){

    application.get('/formulario_incluindo_noticia', function(req,res){
        res.render('admin/form_add_noticia.ejs', {validacao : {}, noticia : {}});
    });

    application.post('/noticias/salvar', function(req,res){
        var noticia = req.body;

        req.assert('titulo','O Título é obrigatório').notEmpty();
        req.assert('noticia','A Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render('admin/form_add_noticia.ejs', {validacao : erros, noticia : noticia});
            return;
        }

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, connection, function(error, result){
        res.redirect('/noticias');
        });

    });

};