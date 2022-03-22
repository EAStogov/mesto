export default class Card {

  constructor(data, cardSelector, handleCardClick) {
    this._place = data.place;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  createCard() {
    this._getTemplate();
    const cardImage = this._cardElement.querySelector('.elements__image');
    
    this._cardElement.querySelector('.elements__place').textContent = this._place;
    cardImage.setAttribute('src', this._link);
    cardImage.setAttribute('alt', this._place);
    
    this._setEventListeners();
    return this._cardElement;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.elements__trash').addEventListener('click', () => this._cardElement.remove());
    this._cardElement.querySelector('.elements__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like_active');
    });
    this._cardElement.querySelector('.elements__image').addEventListener('click', () => {
      this._handleCardClick();
    })
  }
}