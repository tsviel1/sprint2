'use strict'


function onInit() {
    renderGallery()
    initCanvas()
}

function renderGallery() {
    var photos = getPhotos()

    var strHTML = photos.map((photo) => `<div class="card flex" onclick="onImgSelect('${photo.id}')">
    <img id="${photo.id}" src="${photo.url}" />
    </div>`)

   document.querySelector('main').innerHTML = strHTML.join('')
}

function toggleHamburger() {
    document.body.classList.toggle('menu-open')
    const elBtn = document.querySelector('.hamburger-btn')
    elBtn.innerText = elBtn.innerText === '☰' ? '✖' : '☰'
  }