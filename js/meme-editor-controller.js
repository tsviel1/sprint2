'use strict'

var gElCanvas
var gCtx
var gCurrText
var gCurrStrokeColor = 'black'
var gCurrFillColor = 'red'
var gCurrFontFamily = 'Impact'
var gCurrFontSize = 60

function onSetText(text) {
    console.log(text);
    gCurrText = text
    drawText()
}

function initCanvas() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function drawText() {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = gCurrStrokeColor;
    gCtx.fillStyle = gCurrFillColor;
    gCtx.font = `${gCurrFontSize}px ${gCurrFontFamily}`;
    gCtx.fillText(gCurrText, 50, 50+gCurrFontSize);
    gCtx.strokeText(gCurrText, 50, 50+gCurrFontSize);
}

function onChoosePhoto(photoId) {
    console.log(photoId)
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none'

    var elEditingArea = document.querySelector('.editing-area')
    elEditingArea.style.display = 'flex'
    renderMeme(photoId)
}


function renderMeme(photoId) {
    const image = document.getElementById(photoId)
    gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
}