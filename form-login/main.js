function salvarDados() {
    var user = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        idade: document.getElementById("idade").value,
        cidade: document.getElementById("cidade").value
    }
    console.log(user)
}