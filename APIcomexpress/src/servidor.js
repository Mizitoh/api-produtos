const porta = 3003
const bancoDeDados = require ('./bancoDeDados')

const express = require('express');
 
const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/produtos',(req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log (`Servidor escutando na porta ${porta}.`)
})