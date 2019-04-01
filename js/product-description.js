const $heart = document.querySelector(".-heart");

const $firstStar = document.querySelectorAll(".star");

$heart.addEventListener("click", function(){
    $heart.classList.toggle("-active");
})


console.log($firstStar[1]);

for (var i=0; i<5; i++){
    console.log (i);
    $firstStar[i].addEventListener("click", function(){
        $firstStar[i].classList.toggle("-active");
    });
    
}


