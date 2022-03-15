var express  = require('express');
var app = express();

app.set('view engine' ,'ejs');

app.get('/tecnologia', function(req, res){
    res.render('secao/tecnologia.ejs');
});

app.get('/', function(req,res){
    res.render('<html><body> Portal de Noticias</body></html>');
});

app.get('/moda', function(req,res){
    res.send('<html><body> Portal de Moda</body></html>');
});

app.listen(3000, function(){
    console.log('Rodando com express!');
});