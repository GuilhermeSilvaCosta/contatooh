angular.module('contatooh', ['ngRoute'])
    .config(config);

function config($routeProvider){
    $routeProvider
    .when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    })
    .when('/contato/:contatoId',{
        templateUrl: 'partials/contato.html',
        controller: 'ContatosController'        
    });
}