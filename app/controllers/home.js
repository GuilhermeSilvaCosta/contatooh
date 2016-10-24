module.exports = function(){
    const controller = {};
    controller.index = function(req, res){
        res.render('index', {nome: 'Express'});
    };
    return controller
}