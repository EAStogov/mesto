export default class Card {

  constructor(data, cardSelector, handleCardClick, handleTrashClick, handleLike) {
    this._place = data.name;
    this._link = data.link;
    this.likes = JSON.stringify(data.likes);
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLike = handleLike;
  }

  createCard(ownerId, user) {
    this._getTemplate();
    const cardImage = this._cardElement.querySelector('.elements__image');

    this._cardElement.querySelector('.elements__place').textContent = this._place;
    this._likeCount = this._cardElement.querySelector('.elements__like-count');
    this._likeCount.textContent = JSON.parse(this.likes).length;

    cardImage.setAttribute('src', this._link);
    cardImage.setAttribute('alt', this._place);
    
    this._setEventListeners();
    
    this._user = JSON.stringify(user);
    
    if (ownerId !== user._id) {
      this._cardElement.querySelector('.elements__trash').classList.add('elements__trash_desabled');
    };

    if (this.likes.includes(this._user)) {
      this._cardElement.querySelector('.elements__like').classList.add('elements__like_active');
    }

    return this._cardElement;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);
  }

  updateLike(res, evt) {
    evt.target.classList.toggle('elements__like_active');
    this._likeCount.textContent = res.likes.length;
    this.likes = JSON.stringify(res.likes);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.elements__trash').addEventListener('click', () => {
      this._handleTrashClick(this._cardElement);
    });

    this._cardElement.querySelector('.elements__like').addEventListener('click', (evt) => {
      this._handleLike(this, evt);
    });

    this._cardElement.querySelector('.elements__image').addEventListener('click', () => {
      this._handleCardClick();
    })
  }
}