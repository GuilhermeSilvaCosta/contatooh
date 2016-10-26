angular.module('contatooh').controller('ContatoController', ContatoController);

function ContatoController($scope, $routeParams){
    console.log($routeParams.contatoId);    
}