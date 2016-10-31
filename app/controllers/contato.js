'use strict';

let contatos = [
    {_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
    {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
    {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
];

let ID_CONTATO_INC = 3;

module.exports = function(){
    const controller = {};
    controller.listaContatos = function(req, res){
        res.json(contatos);
    };
    controller.obtemContato = function(req, res){
        const idContato = req.params.id;
        const contato = contatos.filter(function(contato){
            return contato._id == idContato;
        })[0];
        contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
    };
    controller.removeContato = function(req, res){            
        const idContato = req.params.id;
        contatos = contatos.filter(function(contato){
            return contato._id != idContato;
        });
        res.sendStatus(204).end();
    };
    controller.salvaContato = function(req, res){
        let contato = req.body;
        contato = adiciona(contato);
        res.json(contato);
    };
    controller.atualizaContato = function(req, res){
        let contato = req.body;
        contato = atualiza(contato);
        res.json(contato);
    }

    function adiciona(contato){
        contato._id = ++ID_CONTATO_INC;
        contatos.push(contato);
        return contato;
    }

    function atualiza(contatoAlterar){
        contatos = contatos.map(function(contato){
            if(contato._id == contatoAlterar._id){
                contato = contatoAlterar;
            }
            return contato;
        });
        return contatoAlterar;
    }
    return controller;
}