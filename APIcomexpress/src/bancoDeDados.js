const sequence = {
    _id:1,
    get id(){return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
        produtos[produto.id] = produto
    return produto
}

function getProdutos(){
    return Object.values(produtos)
}

function getProduto(id){
    return produtos[id] || {}
}

function excluirProduto(id){
    delete produtos[id]
    return produtos[id] 
}

module.exports = { salvarProduto, getProdutos, getProduto, excluirProduto }