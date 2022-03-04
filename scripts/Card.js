import {openPopup, imagePopup, popupImage, popupDesc} from './index.js';
const elementsList = document.querySelector('.elements__list');
class Card {

  constructor(data, cardSelector) {
    this.place = data.name;
    this.link = data.link;
    this.cardSelector = cardSelector;
  }

  _createCard() {
    const templateCard = document.querySelector('#card-template').content;
    const newCard = templateCard.querySelector(this.cardSelector).cloneNode(true);
    const cardImage = newCard.querySelector('.elements__image');
    
    newCard.querySelector('.elements__place').textContent = this.place;
    cardImage.setAttribute('src', this.link);
    cardImage.setAttribute('alt', this.place);
    
    this._setEventListeners(newCard);

    return newCard;
  }

  _setEventListeners(obj) {
    obj.querySelector('.elements__trash').addEventListener('click', () => {obj.remove()});
    obj.querySelector('.elements__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like_active');
    });
    obj.querySelector('.elements__image').addEventListener('click', () => {
      openPopup(imagePopup);
      popupImage.setAttribute('src', this.link);
      popupImage.setAttribute('alt', this.place);
      popupDesc.textContent = this.place;
    })
  }

  addCard(isAppend) {
    if (isAppend) {
      elementsList.append(this._createCard());
    } else {
      elementsList.prepend(this._createCard());
    }
  }
}

const initialCards = [
  {
    name: 'Россия',
    link: './images/Russia.jpg'
  },
  {
    name: 'Хорватия',
    link: './images/Croatia.jpg'
  },
  {
    name: 'Германия',
    link: './images/Germany.jpg'
  },
  {
    name: 'Турция',
    link: './images/Turkey.jpg'
  },
  {
    name: 'Вьетнам',
    link: './images/Vietnam.jpg'
  },
  {
    name: 'Япония',
    link: './images/Japan.jpg'
  }
];


export {Card, initialCards};