'use strict';

module.exports = function(app){
    const controller = {};
    const Contato = app.models.contato;
    const sanitize = require('mongo-sanitize');

    controller.listaContatos = function(req, res){
        const promise = Contato.find().populate('emergencia').exec()
        .then(
            function(contatos){
                res.json(contatos);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
        
    };
    controller.obtemContato = function(req, res){
        const _id = req.params.id;
        Contato.findById(_id).exec()
        .then(
            function(contato){
                if (!contato) throw new Error("Contato não encontrado");
                res.json(contato)
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro)
            }
        );
    };
    controller.removeContato = function(req, res){            
        const _id = sanitize(req.params.id);
        Contato.remove({"_id": _id}).exec()
        .then(
            function(){
                res.end();
            },
            function(erro){
                return console.error(erro);
            }
        );
    };
    controller.salvaContato = function(req, res){
        req.body.emergencia = req.body.emergencia || null;
        Contato.create(req.body)
        .then(
            function(contato){
                res.status(201).json(contato);
            },
            function(erro){
                console.erro();
                res.status(500).json(erro);
            }
        );
    };
    controller.atualizaContato = function(req, res){
        const _id = req.body._id;
        const dados = {
            "nome" : req.body.name,
            "email" : req.body.email,
            "emergencia" : req.body.emergencia || null
        };
         
        Contato.findByIdAndUpdate(_id, req.body).exec()
        .then(
            function(contato){
                res.json(contato)
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}