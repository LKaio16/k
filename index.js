const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express
var fs = require("fs");

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo!</h1>");
})

//rota com parametro 
app.get("/boasvindas/:parametro", function(req,res){
    res.send("Seja bem vindo " + req.params.parametro);
})

app.get('/integrantes', function (req, res) {
    fs.readFile( __dirname + "/" + "integrantes.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 3000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

