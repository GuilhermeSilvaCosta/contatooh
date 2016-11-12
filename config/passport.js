const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');

module.exports = function(){

    const Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: '719edbed0b94989ba9f7',
        clientSecret: '6c10e609a46c956eca6a69dd02baf204731663eb',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done){
        Usuario.findOrCreate(
            {"login" : profile.username},
            {"nome" : profile.username},
            function(erro, usuario){
                if(erro){
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));
    /*
    Chamado apenas UMA vez e recebe o usuário do nosso
    banco disponibilizado pelo callback da estratégia de
    autenticação. Realizará a serialização apenas do
    ObjectId do usuário na sessão.
    */
    passport.serializeUser(function(usuario, done){
        done(null, usuario._id);
    });
    
    // Recebe o ObjectId do usuário armazenado na sessão
    // Chamado a CADA requisição
    passport.deserializeUser(function(id, done){
        Usuario.findById(id).exec()
        .then(function(usuario){
            done(null, usuario);
        });
    });
};