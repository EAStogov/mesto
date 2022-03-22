export default class UserInfo {
  constructor({ name, desc}) {
    this._name = document.querySelector(name);
    this._desc = document.querySelector(desc);
  }

  getUserInfo() {
    return { name: this.name.textContent, desc: this.desc.textContent };
  }

  setUserInfo({ name, description }) {
    this._name.textContent = name;
    this._desc.textContent = description;
  }
}