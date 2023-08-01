const concertFilter = document.querySelector("#Concert");
const entreprisesFilter = document.querySelector("#Entreprise");
const mariagesFilter = document.querySelector("#Mariages");
const portraitFilter = document.querySelector ("#Portrait"); 

concertFilter.addEventListener("click", toggle)

function toggle(){
    concertFilter.classList.toggle("active");
}