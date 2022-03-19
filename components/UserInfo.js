class UserInfo {
  constructor({ name, desc}) {
    this.name = name;
    this.desc = desc;
  }

  getUserInfo() {
    return { name: this.name, desc: this.desc };
  }

  setUserInfo(name, desc) {
    this.name = name;
    this.desc = desc;
  }
}