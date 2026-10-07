const express = require("express")
const routes = express.Router()

const cliente = require("./controllers/clientes")
const  pedido = require("./controllers/pedidos")

const rotaincial = (req, res) => {
 res.json("acho que deu certo")
}
 
routes.get("/",rotaincial);

routes.post('/clientes', cliente.criar)
routes.get('/clientes', cliente.listar)
routes.put('/clientes/:id', cliente.alterar)
routes.delete('/clientes/:id', cliente.excluir)

routes.post('/pedidos',pedido.criar)
routes.get('/pedidos', pedido.listar)
routes.put('/pedidos/:id', pedido.alterar)
routes.delete('/pedidos/:id', pedido.excluir)

module.exports = routes