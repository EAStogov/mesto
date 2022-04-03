export default class UserInfo {
  constructor(config) {
    this._name = document.querySelector(config.name);
    this._about = document.querySelector(config.about);
    this._avatar = document.querySelector(config.avatar);
  }

  getUserInfo() {
    return { name: this._name.textContent, about: this._about.textContent, id: this._id };
  }

  setUserInfo({ name, about, _id, avatar }) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.setAttribute('src', avatar);
    this._id = _id;
  }
}