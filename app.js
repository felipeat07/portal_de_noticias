var app = require('./config/server.js');

var rotaHome = require('./app/routes/home.js');
var rotaNoticias = require('./app/routes/noticias.js');
var rotaFormulario = require('./app/routes/formulario_incluindo_noticia.js');

rotaHome(app);
rotaNoticias(app);
rotaFormulario(app);

app.listen(3000, function(){
    console.log('Servidor ON!');
});