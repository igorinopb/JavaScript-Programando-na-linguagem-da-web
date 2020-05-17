var campoFiltro = selecionaDado(document, "#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    var pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            var tdNome = selecionaDado(paciente, ".info-nome")
            var nome = conteudo(tdNome)
            var expressao = RegExp(this.value, "i")
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    } 
})



// function tiraAcento(texto){
//     var textoSemAcento = []
//     for (var i = 0; i < texto.length; i++) {
//         var letra = eliminarAcento(texto[i])
//         textoSemAcento.push(letra)
//     }
//     return textoSemAcento
// }

// function eliminarAcento(letra) {
//     var acentos = [
//       {de: "áåãàâä", para: "a"},
//       {de: "ÁÅÃÀÂÄ", para: "A"},
//       {de: "éêèë", para: "e"},
//       {de: "ÉÊÈË", para: "E"},
//       {de: "íîìï", para: "i"},
//       {de: "ÍÎÌÏ", para: "I"},
//       {de: "óõòôö", para: "o"},
//       {de: "ÓÕÒÔÖ", para: "O"},
//       {de: "úùûü", para: "u"},
//       {de: "ÚÙÛÜ", para: "U"},
//       {de: "ý", para: "y"},
//       {de: "Ý", para: "Y"},
//       {de: "ç", para: "c"},
//       {de: "Ç", para: "C"},
//       {de: "ñ", para: "n"},
//       {de: "Ñ", para: "N"},
//       {de: "ά", para: "α"},
//       {de: "έ", para: "ε"},
//       {de: "ή", para: "η"},
//       {de: "ίϊ", para: "ι"},
//       {de: "ό", para: "ο"},
//       {de: "ύϋ", para: "υ"},
//       {de: "ώ", para: "ω"},
//       {de: "Ά", para: "Α"},
//       {de: "Έ", para: "Ε"},
//       {de: "Ή", para: "Η"},
//       {de: "ΊΪ", para: "Ι"},
//       {de: "Ό", para: "Ο"},
//       {de: "ΎΫ", para: "Υ"},
//       {de: "Ώ", para: "Ω"},
//       {de: "ς", para: "σ"}
//     ];
//     for (e in acentos) {
//       for (var a = 0; a < acentos[e].de.length; a++) {
//         if (letra === acentos[e].de[a]) return acentos[e].para;
//       }
//     }
//     return letra;
//   }