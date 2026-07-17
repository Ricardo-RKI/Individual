var dashboardModel = require("../models/dashboardModel");

function listar(req, res) {

    var idUsuario =  req.params.id_usuario
    dashboardModel.listar(idUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json

        
        res.status(200).json(
            {
                rolagens: resultado[0].total_rolagens,
                sucessos: resultado[0].total_sucessos,
                fracassos: resultado[0].total_fracassos,
                media: resultado[0].media_sucessos

            }
        );
        console.log(`Estou no Controller Listar`)

    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function linhaTempo(req, res) {
    var idUsuario =  req.params.id_usuario
    dashboardModel.linhaTempo(idUsuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json

        
        res.status(200).json(resultado);
        console.log(`Estou no Controller Linha do Tempo`)

    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    linhaTempo
}