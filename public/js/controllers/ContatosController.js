angular.module('contatooh').controller('ContatosController',ContatosController);


function ContatosController($scope){
    $scope.total = 0;

    $scope.incrementa = incrementa;
    function incrementa(){
        $scope.total++;
    }
}