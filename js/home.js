//Desafio básico: pegar o evento de click no botão "Adiciona no carrinho" e exibir no console
//Desafio intermediário: Exibir uma mensagem ao clicar no botão com o texto "ae"
//No desafio intermediário optei por exibir tanto no console quanto no alert.
//Desafio avançado: Modificar o texto da Nav onde está escrito "Carrinho(10)" ao clicar no botão "Adiciona no carrinho".
let valorInicial = 10;
const $cart = document.querySelector(".-second");
const $navigationCart = document.querySelector(".-last");

$cart.addEventListener("click", handleClick);

function handleClick(){
    
    $navigationCart.textContent = `Carrinho (${++valorInicial})`;
}