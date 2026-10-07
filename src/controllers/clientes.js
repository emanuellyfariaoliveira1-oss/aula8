const clientes = require("../../dados/clientes.json");

const listar = (req, res ) => {
    res.json(clientes);
}

const criar = (req, res) => {
    const dados = req.body;
    dados.id = number(clientes[clientes.length - 1].id) + 1;
    clientes.push(dados)
    res.status(201).json(dados) 
}

const alterar = (req, res) => {res.json("em construção")}
const excluir = (req, res) => {res.json("em construção")}

module.exports = {
    criar, listar,alterar,excluir
}