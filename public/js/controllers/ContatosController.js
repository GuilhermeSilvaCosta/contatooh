angular.module('contatooh').controller('ContatosController',ContatosController);


function ContatosController($scope, Contato){
    $scope.filtro = '';

    $scope.contatos = [];
    $scope.mensagem = {};

    function sucesso(contatos){
        $scope.contatos = contatos;
        $scope.mensagem = {};
    }

    function erro(erro){
        console.log(erro);
        $scope.mensagem = {texto: erro};
    }

    function buscaContatos(){
        Contato.query(sucesso, erro);
    }
    buscaContatos();

    $scope.remove = remove;
    function remove(contato){
        Contato.delete({id: contato._id}, buscaContatos,erro);
    }    
}