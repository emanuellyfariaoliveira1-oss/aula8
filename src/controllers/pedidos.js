
const pedidos = require("../../dados/pedidos.json");  

const listar =(req, res) => {
    res.json(pedidos)
};

function subtotais(){
    pedidos.forEach( p => {
        p.subtotais = p.quantidades * p.preço;

    })
};
const altera  = (req, res) =>{
    const id = req.params.id;
    const dados = req.body;

    pedidos.forEach((pedidos) =>{
        
        if(pedidos.id == id){
          pedidos.cliente = dados.cliente
          pedidos.produto = dados.produto
          pedidos.preco = dados.preco
          pedidos.quantidade = dados.quantidade
        }
    })
res.send ("pedidos excluido com sucesso")
}  


const alterar = (req, res) => {res.json("em construção")}
const excluir = (req, res) => {res.json("em construção")}
const criar = (req, res) => {res.json("em construção")}

module.exports ={
    criar,alterar,excluir,listar
};