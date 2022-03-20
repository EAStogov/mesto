export default class UserInfo {
  constructor({ name, desc}) {
    this.name = document.querySelector(name);
    this.desc = document.querySelector(desc);
  }

  getUserInfo() {
    return { name: this.name.textContent, desc: this.desc.textContent };
  }

  setUserInfo({ name, desc }) {
    this.name.textContent = name;
    this.desc.textContent = desc;
  }
}