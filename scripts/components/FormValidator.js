class FormValidator {
  constructor(obj, formElement) {
    this.formSelector = obj.formSelector;
    this.inputSelector = obj.inputSelector;
    this.submitButton = obj.submitButtonSelector;
    this.inactiveButtonClass = obj.inactiveButtonClass;
    this.inputErrorClass = obj.inputErrorClass;
    this.errorClass = obj.errorClass;
    this.formElement = formElement;
  }

  _setEventListeners(form) {
    const inputs = Array.from(form.querySelectorAll(this.inputSelector));
    const formButton = form.querySelector(this.submitButton);
  
    this._toggleButtonState(inputs, formButton);
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputs, formButton);
      })
    });
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._removeInputError(input);
    }
  }

  _toggleButtonState(inputs, formButton) {
    if (this._containsInvalidInput(inputs)) {
      formButton.classList.add(this.inactiveButtonClass);
      formButton.setAttribute('disabled', 'disabled');
    } else {
      formButton.classList.remove(this.inactiveButtonClass);
      formButton.removeAttribute('disabled');
    }
  }

  _showInputError(input) {
    const errorElement = this.formElement.querySelector(`.popup__error_type_${input.name}`);
    input.classList.add(this.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this.errorClass);
  }

  _removeInputError(input) {
    const errorElement = this.formElement.querySelector(`.popup__error_type_${input.name}`);
    input.classList.remove(this.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this.errorClass);
  }

  _containsInvalidInput(inputs) {
    return inputs.some(input => {
      return !input.validity.valid;
    })
  }

  enableValidation() {
    this._setEventListeners(this.formElement);
    this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}

const args = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export {FormValidator, args};