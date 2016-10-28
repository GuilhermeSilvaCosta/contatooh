module.exports = function(app){
    const controller = app.controllers.contato;
    app.route('/contatos')
        .get(controller.listaContatos);

    app.route('/contatos/:id')
        .get(controller.listaContatos)
        .delete(controller.removeContato);        
}