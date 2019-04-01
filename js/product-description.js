// const heart = document.querySelector(".heart");

// heart.addEventListener("click", function(){
//     heart.classList.add("-heart");
// })


//Desafio básico: pegar o evento de click no botão "Adiciona no carrinho" e exibir no console
const $cart = document.querySelector(".-second");

$cart.addEventListener("click", handleClick);

function handleClick(){
    console.log ($cart);
}