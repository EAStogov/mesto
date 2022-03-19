class PopupWithForm extends Popup {
  constructor(selector, submit) {
    super(selector);
    this.form = document.querySelector(selector).querySelector('.popup__form');
    this.submit = submit;
  }

  _getInputValues() {
    const inputs = this.form.querySelectorAll('.popup__input');
    inputs.forEach(input => {
      this.inputs.append(input.value);
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', () => {
      evt.preventDefault();
      this.submit;
      this.close();
    })
  }

  close() {
    super.close();
    this.form.reset();
  }
}