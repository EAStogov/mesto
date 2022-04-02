export default class Card {

  constructor(data, cardSelector, handleCardClick, handleTrashClick, api) {
    this._place = data.name;
    this._link = data.link;
    this._likes = JSON.stringify(data.likes);
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._api = api;
  }

  createCard(ownerId, user) {
    this._user = JSON.stringify(user);
    
    this._getTemplate();
    const cardImage = this._cardElement.querySelector('.elements__image');

    this._cardElement.querySelector('.elements__place').textContent = this._place;
    this._likeCount = this._cardElement.querySelector('.elements__like-count');
    this._likeCount.textContent = JSON.parse(this._likes).length;

    cardImage.setAttribute('src', this._link);
    cardImage.setAttribute('alt', this._place);
    
    this._setEventListeners();
    
    if (ownerId !== user._id) {
      this._cardElement.querySelector('.elements__trash').classList.add('elements__trash_desabled');
    };

    if (this._likes.includes(this._user)) {
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

  _setEventListeners() {
    this._cardElement.querySelector('.elements__trash').addEventListener('click', () => {
      this._handleTrashClick(this._cardElement);
    });

    this._cardElement.querySelector('.elements__like').addEventListener('click', (evt) => {
      this._api.toggleLikeAction(this._likes.includes(this._user), this._cardId).then(res => {
        this._likeCount.textContent = res.likes.length;
        this._likes = JSON.stringify(res.likes);
        evt.target.classList.toggle('elements__like_active');
      })
    });

    this._cardElement.querySelector('.elements__image').addEventListener('click', () => {
      this._handleCardClick();
    })
  }
}