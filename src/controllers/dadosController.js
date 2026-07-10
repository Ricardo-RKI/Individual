var dadosModel = require("../models/dadosModel");

function listar(req, res) {
    dadosModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var id_Usuario = req.body.idUsuarioServer;
    var tipoDado = req.body.tipoDadoServer;
    var tipoTeste = req.body.tipoTesteServer;
    var resultadoFinal = req.body.resultadoServer;
    var sucesso_fracasso = req.body.sucessoFracassoServer;

    if (id_Usuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else if (tipoDado == undefined) { 
        res.status(400).send("Seu dado está undefined!");
    } else if (tipoTeste == undefined) { 
        res.status(400).send("Seu teste está undefined!");
    } else if (resultadoFinal == undefined) { 
        res.status(400).send("Seu resultado final está undefined!");
    } 
    console.log("Oi" + sucesso_fracasso);
    dadosModel.cadastrar(id_Usuario, tipoDado, tipoTeste, resultadoFinal, sucesso_fracasso).then(function(resposta){
        res.status(200).send("Rolagem registrada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}