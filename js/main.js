'use strict'

var gGalleryLength = 18

function onInit() {
    renderGallery()
}

function renderGallery() {
    var strHTML = '';
	for (var i = 1; i <= gGalleryLength; i++) {
        `<div class="card flex">
            <img src="img/meme-imgs (square)/${i}.jpg" alt="">
        </div>`
		}
	
	var elGallery = document.querySelector('main');
	elGallery.innerHTML = strHTML;
}