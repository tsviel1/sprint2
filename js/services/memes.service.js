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

var gMemeHeight
var gMemeWidth
var gMeme

function createGMeme() {
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{
            txt: 'Put your text here',
            isFocused: true,
            fontSize: gMemeHeight / 10,
            fontFamily: 'Impact',
            align: 'left',
            fillColor: 'red',
            strokeColor: 'black',
            posX: gMemeWidth / 10,
            posY: gMemeHeight / 7
        },
        ]
    }
}

function createline() {
    clearFocus()
    let posY
    if (gMeme.lines.length === 1) {
        posY = gMemeHeight - (gMemeHeight / 7)
    } else if (gMeme.lines.length >= 2) {
        posY = gMemeHeight / 2
    }
    return {
        txt: 'Put your text here',
        isFocused: true,
        fontSize: gMemeHeight / 10,
        fontFamily: 'Impact',
        align: 'left',
        fillColor: 'red',
        strokeColor: 'black',
        posX: gMemeWidth / 10,
        posY: posY
    }
}


function CreateNewLine() {
    gMeme.lines.push(createline())
}

function changeFontHeightEtc(num) {
    gMemeWidth = num
    gMemeHeight = num
}

function getLinesAmount() {
    return gMeme.lines.length
}

function TrashLine(lineIdx) {
    gMeme.lines.splice(lineIdx, 1)
}

function MoveLineDown(currLineIdx) {
    gMeme.lines[currLineIdx].posY += 10
}

function MoveLineUp(currLineIdx) {
    gMeme.lines[currLineIdx].posY -= 10
}

function SetFontFamily(fontFamily, lineIdx) {
    gMeme.lines[lineIdx].fontFamily = fontFamily
}

function setStrokeColor(color, lineIdx) {
    gMeme.lines[lineIdx].strokeColor = color
}

function setFillColor(color, lineIdx) {
    gMeme.lines[lineIdx].fillColor = color
}

function setImg(photoId) {
    gMeme.selectedImgId = photoId
    gMeme.lines
}

function setLineText(text, CurrLine) {
    gMeme.lines[CurrLine].txt = text
}

function increaseFont(lineIdx) {
    var currSize = gMeme.lines[lineIdx].fontSize
    if (currSize > 200) return
    gMeme.lines[lineIdx].fontSize += 5
}

function decreaseFont(lineIdx) {
    var currSize = gMeme.lines[lineIdx].fontSize
    if (currSize < 10) return
    gMeme.lines[lineIdx].fontSize -= 5
}

function alignLeft(lineIdx) {
    gMeme.lines[lineIdx].align = 'left'
    gMeme.lines[lineIdx].posX = gMemeWidth / 10
}

function alignCenter(lineIdx) {
    gMeme.lines[lineIdx].align = 'center'
    gMeme.lines[lineIdx].posX = gMemeWidth / 2
}

function alignRight(lineIdx) {
    gMeme.lines[lineIdx].align = 'right'
    gMeme.lines[lineIdx].posX = gMemeWidth - (gMemeWidth / 10)
}

function getPhotos() {
    return gImgs
}

function getMeme() {
    return gMeme
}

// Focus

function getFocused() {
    const lineObj = gMeme.lines.find(line => line.isFocused)
    return lineObj
}