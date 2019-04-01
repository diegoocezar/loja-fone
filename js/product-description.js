// const heart = document.querySelector(".heart");

// heart.addEventListener("click", function(){
//     heart.classList.add("-heart");
// })


//Desafio básico: pegar o evento de click no botão "Adiciona no carrinho" e exibir no console
//Desafio intermediário: Exibir uma mensagem ao clicar no botão com o texto "ae"
//No desafio intermediário optei por exibir tanto no console quanto no alert.
const $cart = document.querySelector(".-second");

$cart.addEventListener("click", handleClick);

function handleClick(){
    console.log ("ae");
    alert("ae");
}


