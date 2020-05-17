var pacientes = document.querySelectorAll(".paciente")

var tabela = selecionaDado(document, "table")

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut")
	setTimeout(function(){
		event.target.parentNode.remove()
	}, 400)
})
	