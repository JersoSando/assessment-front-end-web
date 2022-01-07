console.log("hello world");

let form = document.querySelector('form#contact');
let img = document.querySelector('img')


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted!');
}
form.addEventListener('submit', handleSubmit);

function imgAlert(evt){
	evt.preventDefault();

	alert('Beautiful Picture');
}
img.addEventListener('mouseover', imgAlert);