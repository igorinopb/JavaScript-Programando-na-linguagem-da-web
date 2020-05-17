var botaoAdicionar = selecionaDado(document, "#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){

        var erroAjax = selecionaDado(document, "#erro-ajax")

        if(xhr.status == 200){
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            erroAjax.classList.remove("invisivel")
        }
    })

    xhr.send()
    
})