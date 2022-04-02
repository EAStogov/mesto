import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(selector, submit) {
    super(selector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__submit');
    this._submitButtonText = this._submitButton.textContent;
    this._submit = submit;
    this._submitChanges = this._submitChanges.bind(this);
  }

  _getInputValues() {
    this._inputValues = {}
    this._inputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  _submitChanges(evt) {
    evt.preventDefault();
    this._submitButton.textContent = 'Сохранение...';
    this._submit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitChanges);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', this._submitChanges);
  }

  close() {
    super.close();
    this._form.reset();
  }

  open() {
    super.open();
  }
}