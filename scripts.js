/* Variáveis é um espaço de memória que voce reserva e pode guardar o que quiser lá.
   3 jeitos de criar uma variável 
   - var / jeito antigo - NÃO USE
   - let -> Você pode alterar o valor depois
   - const -> constante não consegue alterar o valor depois 
   - se for um texto adicionar "" ou ''
   */

/*

  Funções é um trecho de código que, só é executado quando é chamado

*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao (){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible" 
}

function cliqueiFechar(){
    form .style.left = "-155px"
    mascara.style.visibility = "hidden"
}


