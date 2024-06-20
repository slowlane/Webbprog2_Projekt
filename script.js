const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const button = document.getElementById("submit");


if(button){
    button.addEventListener("click", (event) => {
        event.preventDefault();

        let name = nameInput.value;
        let email = emailInput.value;
        let message = messageInput.value;
    
        if(validateInput(name, email, message)){
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }
    });
}


function validateInput(name, email, message){

    if(!validateEmail(email)){
        alert("Felaktigt format på email.")
        return;
    }
    if(!name || name == "" || !message || message == ""){
        alert("Dubbelkolla din info. Du har utelämnat namn eller meddelande.");
        return;
    }

    alert(`Vi har mottagit ditt meddelande, ${name}.`);
    return true;

}

function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}