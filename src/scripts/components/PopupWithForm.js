import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(selector, submit) {
    super(selector);
    this._form = this.popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._submit = submit;
  }

  _getInputValues() {
    this._inputValues = {}
    this._inputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}