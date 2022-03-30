export default class Card {

  constructor(data, cardSelector, handleCardClick, handleTrashClick) {
    this._place = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
  }

  createCard(hasTrash) {
    this._getTemplate();
    const cardImage = this._cardElement.querySelector('.elements__image');
    
    this._cardElement.querySelector('.elements__place').textContent = this._place;
    cardImage.setAttribute('src', this._link);
    cardImage.setAttribute('alt', this._place);
    
    this._setEventListeners();
    
    if (hasTrash) {
      this._cardElement.querySelector('.elements__trash').classList.add('elements__trash_desabled');
    };
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
    this._cardElement.querySelector('.elements__trash').addEventListener('click', () => {
      this._handleTrashClick(this._cardElement);
    });
    this._cardElement.querySelector('.elements__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like_active');
    });
    this._cardElement.querySelector('.elements__image').addEventListener('click', () => {
      this._handleCardClick();
    })
  }
}