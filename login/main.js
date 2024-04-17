function login(){
    const data = {
        usuario: "mommiescatcher64",
        senha: "123456"
    }
    let val1 = document.getElementById("usuario").value;
    let val2 = document.getElementById("senha").value;
    console.log(val1)
    console.log(val2)
    if (val1 == data.usuario){
        if (val2 == data.senha) {
            window.location.replace("./odeiofrontend.html")
        }
    }else{
        window.alert('Usuario ou senha incorreta')
    }
    }
