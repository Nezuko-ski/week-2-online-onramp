const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const message = document.getElementById('message')
const button1 = document.querySelector('.send')
const button2 = document.querySelector('.cancel')
const nameVal = name.value.trim()

button1.addEventListener('click', (v) => {
    v.preventDefault();

    checkInputs();
    alert(`welcome ${nameVal}`)
})

function checkInputs() {
    const nameVal = name.value.trim()
    const emailVal = email.value.trim()
    const numberVal = number.value.trim()
    const messageVal = message.value.trim()

    if(nameVal === '') {
        callError(name, alert(`all input boxes must be filled`))
    }else {
        callGood(name)
    }
    if(emailVal === '') {
        callError(email, alert(`all input boxes must be filled`))
    }else {
        callGood(email)
    }
       let numbers = /^[0-9]+$/
    if(numberVal === '') {
        callError(number, alert(`all input boxes must be filled`))
    }else if(!numberVal.match(numbers)) {
        callError(number, alert(`phone number field must only contain numbers`))
    }else {
        callGood(number)
    }
    if(messageVal === '') {
        callError(message, alert(`all input boxes must be filled`))
    }else if(messageVal.length > 100) {
        callError(message, alert(`message field cannot have more than 100 characters`)) 
    }else {
        callGood(message)
    } /* Whatever
    if(nameVal == `form-style good` && emailVal == `form-style good` && numberVal == `form-style good` && messageVal == `form-style good`) {
        button1.addEventListener('click', (v) => {
            alert(`welcome ${nameVal}`)
        })
    }*/
}

function callError(input, message) {
    const formStyle = input.parentElement
    const small = formStyle.querySelector('small')

    small.innerText = message;
    formStyle.className ='form-style error';
}
   

function callGood(input) {
    const formStyle = input.parentElement;
    formStyle.className = `form-style good`
}

// I GIVE UP!!!!!!!!!!!!!!!!!
