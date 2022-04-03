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
        return Promise.reject(`Что-то пошло не так. Код ошибки: ${res.status}`);
      }
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
        name: data.about,
        link: data.link
      })
    }));
  }

  editProfile(data) {
    return this._makeRequest(fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
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

  _like(cardId) {
    return this._makeRequest(fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }));
  }

  _dislike(cardId) {
    return this._makeRequest(fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }));
  }

  toggleLikeAction(isDelete, cardId) {
    if (isDelete) {
      return this._dislike(cardId);
    } else {
      return this._like(cardId);
    }
  }

  deleteCard(cardId) {
    return this._makeRequest(fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }));
  }
}