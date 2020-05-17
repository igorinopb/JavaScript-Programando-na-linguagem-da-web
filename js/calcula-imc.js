var dado

function mostra(item){
	console.log(item)
}

function conteudo(target){
	return target.textContent
}

function selecionaDado(target0, target1){
	return dado = target0.querySelector(target1)
}

function trocaDado(target0, target1, newData){
	selecionaDado(target0, target1)
	dado.textContent = newData
}

var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i]

	var tdPeso = selecionaDado(paciente, '.info-peso')
	var peso  = conteudo(tdPeso)

	var tdAltura = selecionaDado(paciente, '.info-altura')
	var altura = conteudo(tdAltura)

	var pesoEhValido = validaPeso(peso)
	var alturaEhValida = validaAltura(altura)

	if(!pesoEhValido){
		trocaDado(paciente, '.info-imc', "Peso inválido!")
		paciente.classList.add("paciente-invalido")
	}

	if(!alturaEhValida){
		trocaDado(paciente, '.info-imc', "Altura inválida!")
	}

	if(pesoEhValido == true && alturaEhValida == true){
		var imc = calculaImc(peso, altura)
		trocaDado(paciente, '.info-imc', imc)
	}
}

function calculaImc(peso, altura){
	var imc = 0
	imc = peso / (altura * altura)
	return imc.toFixed(2)
}

function validaPeso(peso){
	if(peso >= 0 && peso < 600){
		return true
	}else{
		return false
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura < 3.00){
		return true
	}else{
		return false
	}
}