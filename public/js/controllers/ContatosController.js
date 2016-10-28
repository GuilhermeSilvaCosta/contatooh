angular.module('contatooh').controller('ContatosController',ContatosController);


function ContatosController($scope, $resource){
    $scope.filtro = '';

    $scope.contatos = [];

    function sucesso(contatos){
        $scope.contatos = contatos;
    }

    function erro(erro){
        console.log(erro);
    }

    var Contato = $resource('/contatos/:id');

    function buscaContatos(){
        Contato.query(sucesso, erro);
    }
    buscaContatos();

    $scope.remove = remove;
    function remove(contato){
        Contato.delete({id: contato._id}, buscaContatos,erro);
    }    
}