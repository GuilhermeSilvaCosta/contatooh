angular.module('meusComponentes', [])
.directive('meuPainel', meuPainel)
.directive('meuBotaoAviso', meuBotaoAviso)
.directive('meuFocus', meuFocus);


function meuPainel(){
    var directive = {};

    directive.restrict = "EA";
    directive.scope = {
        titulo: '@'
    };

    directive.transclude = true;

    directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html'

    return directive;
}

function meuBotaoAviso(){
    var directive = {};

    directive.restrict = 'E';

    directive.scope = {
        nome : '@',
        acao : '&'
    };

    directive.template = 
        '<button ng-click="acao()" class="btn btn-warning">'
        + '{{nome}}'
        +'</button>';

    return directive;
}

function meuFocus(){
    var directive = {};

    directive.restrict = 'A';

    directive.scope = {
        evento: '@'
    };

    directive.link = function(scope, element){
        scope.$on(scope.evento, function(){
            element[0].focus();
        });
    };

    return directive;
}