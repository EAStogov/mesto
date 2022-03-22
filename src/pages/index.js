import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import * as constant from "../scripts/utils/constants.js";
import './index.css';

const popupWithImage = new PopupWithImage(constant.imagePopup);

const cardSection = new Section({
  items: constant.initialCards,
  renderer: (item) => {
    return new Card(item, '#card-template', () => {
      popupWithImage.open(item);
    }).createCard();
  }
}, '.elements__list');

cardSection.renderItems();

const userInfo = new UserInfo({ name: '.profile__name', desc: '.profile__description' });

const popupWithEditForm = new PopupWithForm('#edit-popup', (inputValues) => {
  userInfo.setUserInfo(inputValues);
  popupWithEditForm.close();
});

const popupWithAddForm = new PopupWithForm('#add-popup', (inputValues) => {
  cardSection.addItem(inputValues);
  popupWithAddForm.close();
});

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
constant.addCardButton.addEventListener('click', () => {
  formValidators['popup__form-add'].resetValidation();
  popupWithAddForm.open();
});

popupWithAddForm.setEventListeners();
popupWithEditForm.setEventListeners();
popupWithImage.setEventListeners();