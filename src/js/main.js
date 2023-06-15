// Making use of the constraint validation API. 

class FormComponent {
  #form = document.querySelector("form"); 
  #errorMessage = document.querySelector("p[class='error-message']"); 
  #email = document.querySelector("input[type='email']"); 

  constructor() {
    this.#form.addEventListener('submit', this.#submitForm.bind(this));
  }

  #submitForm(evtObj) {
    if(this.#email.validity.valid) {
      this.#resetErrorMessage(); 
    }else {
      evtObj.preventDefault(); 
      this.#showErrorMessage();
    }
  }


  #resetErrorMessage() {
    this.#errorMessage.innerText = ""; 
    this.#errorMessage.setAttribute('hidden', 'hidden')
    this.#email.setAttribute('aria-invalid', 'false'); 
  }

  #showErrorMessage() {
    // Check whether the user enters the wrong email format
    // Check whether the users does not enter any value

    if(this.#email.validity.valueMissing) {
      this.#errorMessage.innerText = "Whoops! It looks like you forgot to add your email"; 
    }

    // No else clause here as I do not see the need for if the code above does not run just run the next if clause below. 

    if(this.#email.validity.typeMismatch) {
      this.#errorMessage.innerText = "Please provide a valid email address"; 
    }

    this.#errorMessage.removeAttribute('hidden'); 
    this.#email.setAttribute('aria-invalid', 'true'); 
  }


}

new FormComponent(); 