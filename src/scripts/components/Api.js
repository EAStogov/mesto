export default class API {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _makeRequest(promise) {
    return promise.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Что-то пошло не так. ${res.status}`);
      }
    }).then(obj => {
      return obj;
    }).catch(err => {
      alert(`Что-то пошло не так. ${err}`);
    });
  }

  getInitialCards() {
    return this._makeRequest(fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    }));
  }

  getProfileInfo() {
    return this._makeRequest(fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    }));
  }

  postNewCard(data) {
    return this._makeRequest(fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.place,
        link: data.link
      })
    }));
  }

  editProfile(name, about) {
    return this._makeRequest(fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    }));
  }

  editAvatar(avatar) {
    return this._makeRequest(fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    }));
  }
}