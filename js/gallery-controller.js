'use strict'

function onInit() {
    renderGallery()
    removeHamburger()
    initCanvas()
}

function removeHamburger() {
    if (document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open')
        const elBtn = document.querySelector('.hamburger-btn')
        elBtn.innerText = '☰'
    }
}

function onAbout() {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editing-area').style.display = 'none'
    document.querySelector('.about').style.display = 'flex'
    document.querySelector('.my-memes-btn a').classList.remove('active')
    document.querySelector('.gallery-btn a').classList.remove('active')
    document.querySelector('.about-btn a').classList.add('active')
    removeHamburger()
}


function renderGallery() {
    document.querySelector('.editing-area').style.display = 'none'
    var photos = getPhotos()
    var strHTML = photos.map((photo) => `<div class="card flex" onclick="onImgSelect('${photo.id}')">
    <img id="${photo.id}" src="${photo.url}" />
    </div>`)
    document.querySelector('main').innerHTML = strHTML.join('')
    document.querySelector('.gallery').style.display = 'grid'
    document.querySelector('.my-memes-btn a').classList.remove('active')
    document.querySelector('.about-btn a').classList.remove('active')
    document.querySelector('.gallery-btn a').classList.add('active')
    document.querySelector('.about').style.display = 'none'


}

function toggleHamburger() {
    document.body.classList.toggle('menu-open')
    const elBtn = document.querySelector('.hamburger-btn')
    elBtn.innerText = elBtn.innerText === '☰' ? '✖' : '☰'
}

function showGallery() {
    document.querySelector('.editing-area').style.display = 'none'
    document.querySelector('.gallery').style.display = 'grid'
}