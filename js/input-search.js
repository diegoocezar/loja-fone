const $inputSearch = document.querySelector(".input-search");
const $icon = document.querySelector(".icon");

$icon.addEventListener("click", () => {
    event.preventDefault();
    $inputSearch.classList.toggle("-active");
})
