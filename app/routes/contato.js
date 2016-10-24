module.exports = function(app){
    const controller = app.controllers.contato;
    app.get('/contatos', controller.listaContatos);
    app.get('/contatos/:id', controller.obtemContato);
}