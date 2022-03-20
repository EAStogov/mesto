import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(selector, submit) {
    super(selector);
    this._form = document.querySelector(selector).querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._submit = submit;
    this.inputValues = { 
      name: this._form.querySelectorAll('.popup__input')[0].value, 
      desc: this._form.querySelectorAll('.popup__input')[1].value 
    };
  }

  _getInputValues() {
    this.inputValues.name = this._inputs[0].value;
    this.inputValues.desc = this._inputs[1].value;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._getInputValues();
      this._submit();
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}