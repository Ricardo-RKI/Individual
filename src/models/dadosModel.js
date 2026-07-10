var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(id_Usuario, tipoDado, tipoTeste, resultadoFinal, sucesso_fracasso) {
    console.log(sucesso_fracasso);
    var instrucao = `
        INSERT INTO rolagens (fkusuario, tipo_dado, tipo_teste, resultado, fracasso_ou_sucesso) VALUES (${id_Usuario}, '${tipoDado}', '${tipoTeste}', '${resultadoFinal}', '${sucesso_fracasso}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};
