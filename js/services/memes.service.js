'use strict'

var gImgs = [
    {
        id: 1,
        url: 'img/meme-imgs (square)/1.jpg',
        keywords: ['funny', 'trump']
    },
    {
        id: 2,
        url: 'img/meme-imgs (square)/2.jpg',
        keywords: ['funny', 'dog']
    },
    {
        id: 3,
        url: 'img/meme-imgs (square)/3.jpg',
        keywords: ['funny', 'dog', 'sleep', 'tired']
    },
    {
        id: 4,
        url: 'img/meme-imgs (square)/4.jpg',
        keywords: ['funny', 'cat', 'tired']
    },
    {
        id: 5,
        url: 'img/meme-imgs (square)/5.jpg',
        keywords: ['funny', 'baby']
    },
    {
        id: 6,
        url: 'img/meme-imgs (square)/6.jpg',
        keywords: ['explaing', 'history']
    },
    {
        id: 7,
        url: 'img/meme-imgs (square)/7.jpg',
        keywords: ['found-out', 'baby']
    },
    {
        id: 8,
        url: 'img/meme-imgs (square)/8.jpg',
        keywords: ['tell-me-more', 'funny']
    },
    {
        id: 9,
        url: 'img/meme-imgs (square)/9.jpg',
        keywords: ['funny', 'baby', 'evil']
    },
    {
        id: 10,
        url: 'img/meme-imgs (square)/10.jpg',
        keywords: ['funny', 'obama']
    },
    {
        id: 11,
        url: 'img/meme-imgs (square)/11.jpg',
        keywords: ['funny', 'gay']
    },
    {
        id: 12,
        url: 'img/meme-imgs (square)/12.jpg',
        keywords: ['funny']
    },
    {
        id: 13,
        url: 'img/meme-imgs (square)/13.jpg',
        keywords: ['funny', 'cheers']
    },
    {
        id: 14,
        url: 'img/meme-imgs (square)/14.jpg',
        keywords: ['funny', 'morpheus', 'matrix']
    },
    {
        id: 15,
        url: 'img/meme-imgs (square)/15.jpg',
        keywords: ['funny']
    },
    {
        id: 16,
        url: 'img/meme-imgs (square)/16.jpg',
        keywords: ['funny', 'star-trek']
    },
    {
        id: 17,
        url: 'img/meme-imgs (square)/17.jpg',
        keywords: ['putin']
    },
    {
        id: 18,
        url: 'img/meme-imgs (square)/18.jpg',
        keywords: ['look-at-all-these', 'toy-story']
    }
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel', size: 20,
        align: 'left',
        color: 'red'
    }]
}


function getPhotos() {
    return gImgs
}