let color = document.querySelector("button#color");
let place = document.querySelector("button#place");
let ritual = document.querySelector("button#ritual");

function changeColor (evt) {
    evt.preventDefault();

    alert("My Favorite Color is Blue")
    
};

function favoritePlace (evt) {
    evt.preventDefault();

    alert("My favorite place is anywhere with a good view and warm weather")
}

function favoriteRitural (evt) {
    evt.preventDefault();

    alert("My favorite ritual is having a cup of coffee every morning")
}

color.addEventListener('click', changeColor);
place.addEventListener('click', favoritePlace);
ritual.addEventListener('click', favoriteRitural);