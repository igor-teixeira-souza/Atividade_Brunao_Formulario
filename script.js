var nomeUsuario = document.getElementById('NomeUsuario')
var email = document.getElementById('Email')
var cpf = document.getElementById('CPF')
var dataNascimento = document.getElementById('dataNascimento')
var senha = document.getElementById('senha')
var confSenha = document.getElementById('ConfSenha')
var telefone = document.getElementById('telefone')
var plataforma = document.getElementById('Plataforma')   
var botao = document.getElementById("botao")

botao.addEventListener('click', ()=> {
    alert("Verfique o console");
    
    usuario = {
        nome: nomeUsuario.value.trim(),
        Email: email.value.trim(),
        Cpf: cpf.value.trim(),
        Senha: senha.value.trim(),
        senhaConfirmada: confSenha.value.trim(),
        telefone: telefone.value.trim(),
        plataforma: Plataforma.value.trim(),
        

    }
    jsonUsuario = JSON.stringify(usuario)
    console.log(jsonUsuario)
    console.log(usuario.valueOf())
})