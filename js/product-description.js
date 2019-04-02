/* 
Com o document.querySelectorAll() somos capazes de obter todos os elementos que possuem determinada classe/ID/tag e nos é retornado uma lista com todos esses elementos;
Podemos percorrer essa lista com o comando .forEach e executar uma função para cada vez que formos avançando na lista;
Utilizando a palavra reservada "this" que tem valor dinâmico, podemos atribuir o valor que a variável possui naquele momento e posição da lista;
*/
const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");
const $lastPosition = $stars.length - 1;

$heart.addEventListener("click", handleClick)

/* Percorre a lista e executa uma função para testar qual estrela foi clicada, dependedo da posição da estrela na lista, é executada uma função específica que fará a adição ou remoção da classe "-active"*/
$stars.forEach(function($star, key){
    if (key == 0){
        $star.addEventListener("click", firstStar);
    }

    if (key == $lastPosition) {
        $star.addEventListener("click", lastStar);
    }

    if (key > 0 && key < $lastPosition){
        $star.addEventListener("click", function(){
            middleStar(key);
        })
    }
})

function handleClick(){
    this.classList.toggle("-active");
}

/* Percorre a lista removendo a classe "-active" de todos os itens;
   Adiciona a classe "-active" no elemento clicado - this
 */
function firstStar(){
    $stars.forEach(function($star){
        $star.classList.remove("-active");
    });

    this.classList.add("-active");
    
}

/* Essa função recebe como parâmetro o index que é passado no momento da chamada, esse índice é a posição do elemento clicado na lista;
    Percorre a lista removendo a classe "-active" de todos os itens;
    Testa se o valor do objeto na lista é menor ou igual ao índice informado anteriormente, se for, adiciona a classe "-active" nos objetos anteriores e no objeto clicado.
*/
function middleStar(index){
    $stars.forEach(function($star, key){
        $star.classList.remove("-active");

        if(key <= index){
            $star.classList.add("-active");
        }
    });
}

/* Percorre a lista e adiciona a classe "-active" em todos os objetos.
 */
function lastStar(){
    $stars.forEach(function($star){
        $star.classList.add("-active");
    });
}


