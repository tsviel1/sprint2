'use strict'

var gElCanvas
var gCtx
var gCurrLineIdx = 0

function onSetLineText(text) {
    setLineText(text, gCurrLineIdx)
    renderMeme()
}

function onCreateNewLine() {
    resetTextInput()
    gCurrLineIdx++
    CreateNewLine()
    renderMeme()
}

function onIncreaseFont() {
    increaseFont(gCurrLineIdx)
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont(gCurrLineIdx)
    renderMeme()
}

function resetTextInput() {
    var elTextInput = document.querySelector('input')
    elTextInput.value = ''
}

function initCanvas() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function onImgSelect(imgId) {
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none'

    var elEditingArea = document.querySelector('.editing-area')
    elEditingArea.style.display = 'flex'
    setImg(imgId)
    renderMeme()
}

function onMoveLineDown() {
    MoveLineDown(gCurrLineIdx)
    renderMeme()
}

function onMoveLineUp() {
    MoveLineUp(gCurrLineIdx)
    renderMeme()
}

function onSwitchLine() {
    let LinesAmount = getLinesAmount()
    if (gCurrLineIdx + 1 === LinesAmount) {
        gCurrLineIdx = 0
    } else {
        gCurrLineIdx++
    }
}

function onTrashLine() {
    TrashLine(gCurrLineIdx)
    gCurrLineIdx--
    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    const photoId = meme.selectedImgId
    const image = document.getElementById(photoId)
    gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.lineWidth = 2;
    for (let i = 0; i < meme.lines.length; i++) {
        const text = meme.lines[i].txt
        const fillColor = meme.lines[i].fillColor
        gCtx.fillStyle = fillColor;
        const strokeColor = meme.lines[i].StrokeColor
        gCtx.strokeStyle = strokeColor;
        const fontFamily = meme.lines[i].fontFamily
        const fontSize = meme.lines[i].fontSize
        gCtx.font = `${fontSize}px ${fontFamily}`;
        const posX = meme.lines[i].posX
        const posY = meme.lines[i].posY
        gCtx.fillText(text, posX, posY);
        gCtx.strokeText(text, posX, posY);
    }

}