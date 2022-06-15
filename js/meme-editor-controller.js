'use strict'

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