angular.module('contatooh').controller('ContatoController', ContatoController);

function ContatoController($scope, $routeParams, Contato){

    function sucesso(contato){
        $scope.contato = contato;
    }

    function erro(erro){
        $scope.mensagem = {texto: erro};
    }

    if ($routeParams.contatoId){
        Contato.get({id: $routeParams.contatoId},sucesso, erro);
    } else {
        $scope.contato = new Contato();
    }

    $scope.salva = salva;
    function salva(){
        if ($scope.contato._id){
            $scope.contato.$update()
                .then(function(){
                    $scope.mensagem = {texto: 'Salvo com sucesso'};
                    $scope.contato = new Contato();
                })
                .catch(erro);            
        } else {
            $scope.contato.$save()
                .then(function(){
                    $scope.mensagem = {texto: 'Salvo com sucesso'};
                    $scope.contato = new Contato();
                    $scope.$broadcast('contatoSalvo');
                })
                .catch(erro);
        }
    }

    Contato.query(function(contatos){
        $scope.contatos = contatos;
    }); 
}