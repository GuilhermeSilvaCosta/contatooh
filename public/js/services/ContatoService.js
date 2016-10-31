angular.module('contatooh').factory('Contato', ContatoService);

function ContatoService($resource){
    return $resource('/contatos/:id', { id: '@id' },{ update: { method: 'PUT' }});
}