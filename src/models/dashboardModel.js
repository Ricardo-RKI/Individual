var database = require("../database/config")

function listar(idUsuario) {
    var instrucao = `
        SELECT COUNT(idrolagem) AS total_rolagens, 
        SUM(fracasso_ou_sucesso like '%Sucesso%') AS total_sucessos,
        SUM(fracasso_ou_sucesso like '%Fracasso%') AS total_fracassos, 
        AVG(fracasso_ou_sucesso like '%Sucesso%') AS media_sucessos
        FROM rolagens 
        WHERE fkusuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function linhaTempo(idUsuario) {
    var instrucao = `
        SELECT DATE_FORMAT(data_rolagem, '%d/%m/%y') AS data_dia, 
        COUNT(idrolagem) AS total_rolagens
        FROM rolagens
        WHERE fkusuario = ${idUsuario}
        GROUP BY data_rolagem
        ORDER BY data_rolagem ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    linhaTempo,
    listar
};