'use strict'

var gGalleryLength = 18
var gElCanvas
var gCtx

function onInit() {
    renderGallery()
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function renderGallery() {
    var photos = getPhotos()

    var strHTML = photos.map((photo) => `<div class="card flex" onclick="onChoosePhoto('${photo.id}')">
    <img id="${photo.id}" src="${photo.url}" />
    </div>`)

   document.querySelector('main').innerHTML = strHTML.join('')
}