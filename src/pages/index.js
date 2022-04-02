import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithConfirm from "../scripts/components/PopupWithConfirm.js";
import API from "../scripts/components/Api.js";
import * as constant from "../scripts/utils/constants.js";
import './index.css';

const popupWithImage = new PopupWithImage(constant.imagePopup);

const popupWithConfirm = new PopupWithConfirm('#confirm-popup', '.popup__submit');

const api = new API({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: 'c110315e-0183-458e-8866-3f24fd7f9a0a',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({ name: '.profile__name', desc: '.profile__description' });

api.getProfileInfo().then(res => {
  userInfo.setUserInfo({name: res.name, description: res.about});
  constant.avatar.style.background = `url(${res.avatar})`;
})

api.getInitialCards().then(rsl => {

  api.getProfileInfo().then(resProfile => {

    const cardSection = new Section({
      items: rsl,
      renderer: (item) => {
        return new Card(item, '#card-template', () => {
          popupWithImage.open(item);
        }, (cardElement) => {
          popupWithConfirm.open(cardElement, api, item._id);
        }, api).createCard(item.owner._id, resProfile);
      }
    }, '.elements__list');

    cardSection.renderItems();

    const popupWithAddForm = new PopupWithForm('#add-popup', (inputValues) => {
      api.postNewCard(inputValues).then(res => {
        cardSection.addItem(res);
        popupWithAddForm.close();
      })
    });

    constant.addCardButton.addEventListener('click', () => {
      formValidators['popup__form-add'].resetValidation();
      popupWithAddForm.open();
    });
  })
})

const popupWithEditForm = new PopupWithForm('#edit-popup', (inputValues) => {
  api.editProfile(inputValues.name, inputValues.description).then((res) => {
      userInfo.setUserInfo({name: res.name, description: res.about});
      popupWithEditForm.close();
  }).catch(err => {
    alert(`Что-то пошло не так. ${err}`);
  })
});

const popupWithAvatarForm = new PopupWithForm('#avatar-popup', (inputValues) => {
  api.editAvatar(inputValues.avatar).then(res => {
    constant.avatar.style.background = `url(${res.avatar})`;
    popupWithAvatarForm.close();
  })
  
})

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(constant.validationArgs);

constant.editProfileButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  constant.inputName.value = userData.name;
  constant.inputDesc.value = userData.desc;
  formValidators['popup__form-edit'].resetValidation();
  popupWithEditForm.open();
});

constant.changeAvatarButton.addEventListener('click', () => {
  formValidators['popup__form-avatar'].resetValidation();
  popupWithAvatarForm.open();
})