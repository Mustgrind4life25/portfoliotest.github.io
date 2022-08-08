// get contact inputs
let form = document.getElementById('myform')

let name = document.getElementById('name')

let email = document.getElementById('email')

let message = document.getElementById('message')

let btn = document.getElementById('form-btn')

let contactMsg = document.getElementById('contact-msg')

let text = document.createTextNode('Someone will be contacting you shortly!')

let error = document.getElementById('show-error')

let errorMsg = document.createTextNode('Must fill out form for services')

error.addEventListener('submit', showError)


form.addEventListener('click', ()=>{

	// check if name was filled
	if (name.value === '' || null){
		event.preventDefault()
		showError()
	}

	// check if email was filled
	if (email.value === '' || null){
		event.preventDefault()
		showError()


		// if the form is filled correctly the code below will run
	}else{
		contactMsg.appendChild(text)
		contactMsg.style.display = 'block';
		contactMsg.style.color = 'green'
		contactMsg.style.padding = '5px'
		name.value = ""
		email.value = ""
		message.value = ""

		// clears the message after 3s
		setTimeout(()=>{
			contactMsg.style.display = 'none';
		}, 3000)
	}

	// if form isn't filled correctly it won't submit
	event.preventDefault()

})

function showError(){
	error.appendChild(errorMsg)
	error.style.display = "block"
	error.style.padding = '5px'

	setTimeout(()=>{
			error.style.display = 'none';
		}, 3000)
}


// form.addEventListener('submit', formValidation)	



