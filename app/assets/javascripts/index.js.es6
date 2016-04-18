'use strict'

$(document).ready( () => {
  doStuff()
})

class Index {
  constructor(firebase) {
    this.firebase = firebase
  }

  get postData() {
    return this.firebase.post
  }
}

const url = new Url
const fbase = new fBase(url.url, 'Hey', 'Me', 'City', 'State', 'Zip')
const index = new Index(fbase)

index.postData

const doStuff = (event) => {
  $('#submit').on('click', () => {
    appendFirebaseData()
  })
}

const appendFirebaseData = () => {
  fbase.firebase.on("value", (snapshot) => {
    $('#realtime-firebase-data').html(`<h1>${snapshot.val().title}</h1>`)
  })
}
