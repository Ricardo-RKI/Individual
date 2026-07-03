-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE dados_individual;

USE dados_individual;

CREATE TABLE usuario (
idusuario INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(225),
dado_comum VARCHAR(45),
resultado_comum VARCHAR (45),
qtd_sucessos INT,
qtd_fracassos INT

);

CREATE TABLE rolagens (
idrolagem INT PRIMARY KEY auto_increment,
fkusuario INT,
tipo_dado INT,
tipo_teste VARCHAR(45),
resultado INT


);
