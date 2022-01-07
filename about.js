console.log("hello world");

let form = document.querySelector('form#contact');


function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}



form.addEventListener('submit', handleSubmit);