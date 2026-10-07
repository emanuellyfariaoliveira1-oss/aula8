
const itens = require("../../dados/itens.json");

const listar =(req, res) => {
    subtotais();
    res.json(itens);
}

function subtotais(){
    itens.forEach(p => {
        p.subtotais = p.quantidade * p.preco;
    })
}

const alterar = (req, res ) => {
    const id = req.params.id;
    const dados = req.body;

    itens.forEach((item) => {
        if(item.id == id){
            item.pedido_id = dados.pedido_id;
            item.produto_id = dados.produto_id;
            item.preco = dados.preco;
            item.quantidade = dados.quantidade;
        }
       
    });

    res.send("Item atualizado com sucesso");
 
}


const excluir = (req, res ) => { 

    const id = req.params.id;
    const indice = itens.findIndex(i => i.id === Number(id));
    if (indice !== -1) {
        itens.splice(indice, 1);
        res.status(200).json({ message: "Item excluído com sucesso" });
    } else {
        res.status(404).json({ message: "Item não encontrado" });
    }

}


const criar = ( req, res) => {
    const dados = req.body;
    dados.id = Number(itens[itens.length - 1].id) + 1;
    itens.push(dados);
    res.status(201).json(dados);

}

module.exports = {
    listar, criar, alterar, excluir, subtotais
}

