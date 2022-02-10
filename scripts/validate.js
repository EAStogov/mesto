function setEventListeners(form, inputSelector, submitButton, inactiveButtonClass) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  const formButton = form.querySelector(submitButton);

  toggleButtonState(inputs, formButton, inactiveButtonClass);

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input);
      toggleButtonState(inputs, formButton, inactiveButtonClass);
    })
  });
}

function checkInputValidity(form, input, inputErrorClass, errorClass) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, inputErrorClass, errorClass);
  } else {
    removeInputError(form, input, inputErrorClass, errorClass);
  }
}

function showInputError(form, input, errorMessage, inputErrorClass, errorClass) {
  const errorElement = form.querySelector(`.popup__input-error_type_${input.name}`);
  input.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function removeInputError(form, input, inputErrorClass, errorClass) {
  const errorElement = form.querySelector(`.popup__input-error_type_${input.name}`);
  input.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
}

function toggleButtonState(inputs, formButton, inactiveButtonClass) {
  if (containsInvalidInput(inputs)) {
    formButton.classList.add(inactiveButtonClass);
    formButton.setAttribute('disabled', 'disabled');
  } else {
    formButton.classList.remove(inactiveButtonClass);
    formButton.removeAttribute('disabled');
  }
}

function containsInvalidInput(inputs) {
  return inputs.some(input => {
    return !input.validity.valid;
  })
}

function enableValidation(obj) {
  const forms = Array.from(document.querySelectorAll(obj.formSelector));
  forms.forEach(form => {
    setEventListeners(form, obj.inputSelector, obj.submitButtonSelector, obj.inactiveButtonClass);
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  });
  // const inputs = Array.from(document.querySelectorAll(obj.inputSelector));
  // inputs.forEach(input => {
  //   setEventListeners(input);
  // })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});