const $inputSearch = document.querySelector(".input-search");
const $magnifier = document.querySelector(".magnifier");
const $close = document.querySelector(".close");

$magnifier.addEventListener("click", () => {
    event.preventDefault();
    
    $inputSearch.classList.toggle("-active");
    
    $magnifier.classList.remove("-active");
    $close.classList.add("-active");
})

$close.addEventListener("click", () => {
    event.preventDefault();
    
    $inputSearch.classList.toggle("-active");
    
    $close.classList.remove("-active");
    $magnifier.classList.add("-active");
})