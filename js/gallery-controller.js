'use strict'

var gGalleryLength = 18

function onInit() {
    renderGallery()
    initCanvas()
}

function renderGallery() {
    var photos = getPhotos()

    var strHTML = photos.map((photo) => `<div class="card flex" onclick="onChoosePhoto('${photo.id}')">
    <img id="${photo.id}" src="${photo.url}" />
    </div>`)

   document.querySelector('main').innerHTML = strHTML.join('')
}