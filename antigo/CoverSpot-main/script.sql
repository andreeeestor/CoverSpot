drop schema if exists CoverSpot;
create schema CoverSpot;
use CoverSpot;

CREATE TABLE Estabelecimento (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cnpj VARCHAR(18) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    tipoEndereco VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    horarioFuncionamento TIME NOT NULL,
    capacidade INT,
    preferenciaMusical VARCHAR(255)
);

CREATE TABLE Banda_Cover (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nomeCover VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    generoMusical VARCHAR(255) NOT NULL,
    biografia VARCHAR(255) NOT NULL,
    portfolio VARCHAR(255) NOT NULL,
    disponibilidade TIME NOT NULL
);
