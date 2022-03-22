export default class FormValidator {
  constructor(obj, formElement) {
    this._formSelector = obj.formSelector;
    this._inputSelector = obj.inputSelector;
    this._form = document.querySelector(this._formSelector);
    this._submitButton = this._form.querySelector(obj.submitButtonSelector);
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
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

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach(input => {
      this._removeInputError(input);
    })
  }

  _toggleButtonState() {
    if (this._containsInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.setAttribute('disabled', 'disabled');
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  }

  _showInputError(input) {
    const errorElement = this._formElement.querySelector(`.popup__error_type_${input.name}`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _removeInputError(input) {
    const errorElement = this._formElement.querySelector(`.popup__error_type_${input.name}`);
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _containsInvalidInput() {
    return this._inputList.some(input => {
      return !input.validity.valid;
    })
  }

  enableValidation() {
    this._setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}