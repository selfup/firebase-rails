'use strict'

class fBase {
  constructor(url, title, author, city, state, zip) {
    this.firebase = new Firebase(url);
    this.title = title
    this.author = author
    this.city = city
    this.state = state
    this.zip = zip
  }

  get post() {
    this.firebase.set({
        title: this.title,
        author: this.author,
        location: {
          city: this.city,
          state: this.state,
          zip: this.zip
      }
    })
  }
}
