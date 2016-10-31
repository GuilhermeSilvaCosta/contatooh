module.exports = function(app){
    const controller = app.controllers.contato;
    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvaContato)
        .put(controller.atualizaContato);

    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato);        
}