'use strict'

var gGalleryLength = 18

function onInit() {
    renderGallery()
}

function renderGallery() {
    var strHTML = '';
	for (let i = 1; i <= gGalleryLength; i++) {
        strHTML += `<div class="card flex">
            <img src="img/meme-imgs (square)/${i}.jpg" />
        </div>`
		}
	
	var elGallery = document.querySelector('main');
    console.log(elGallery);
	elGallery.innerHTML = strHTML;
}