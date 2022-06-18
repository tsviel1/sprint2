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

function onSetFontFamily(fontFamily) {
    SetFontFamily(fontFamily, gCurrLineIdx)
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
function onSetStrokeColor(value) {
    console.log(value);
    setStrokeColor(value, gCurrLineIdx)
    renderMeme()
}

function onSetFillColor(value) {
    setFillColor(value, gCurrLineIdx)
    renderMeme()
}

function initCanvas() {
    gElCanvas = document.getElementById('my-canvas')
    const mq = window.matchMedia('(min-width: 1020px)')
    const mq1 = window.matchMedia('(min-width: 740px)')
    console.log(mq);
    if (mq.matches) {
        gElCanvas.setAttribute('width', '550')
        gElCanvas.setAttribute('height', '550')
        changeFontHeightEtc(550)
    } else if (mq1.matches) {
        gElCanvas.setAttribute('width', '400')
        gElCanvas.setAttribute('height', '400')
        changeFontHeightEtc(400)
    } else {
        changeFontHeightEtc(350)
    }
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')

}

function onImgSelect(imgId) {
    var elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none'

    var elEditingArea = document.querySelector('.editing-area')
    elEditingArea.style.display = 'flex'
    createGMeme()
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

function onAlignLeft() {
    alignLeft(gCurrLineIdx)
    renderMeme()
}

function onAlignCenter() {
    alignCenter(gCurrLineIdx)
    renderMeme()
}

function onAlignRight() {
    alignRight(gCurrLineIdx)
    renderMeme()
}

function onTrashLine() {
    TrashLine(gCurrLineIdx)
    gCurrLineIdx--
    renderMeme()
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
    elLink.download = 'my-meme'
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
        const strokeColor = meme.lines[i].strokeColor
        gCtx.strokeStyle = strokeColor;
        const fontFamily = meme.lines[i].fontFamily
        const fontSize = meme.lines[i].fontSize
        gCtx.font = `${fontSize}px ${fontFamily}`;
        const posX = meme.lines[i].posX
        const posY = meme.lines[i].posY
        const align = meme.lines[i].align
        gCtx.textAlign = align
        gCtx.fillText(text, posX, posY);
        gCtx.strokeText(text, posX, posY);
    }
    renderFocus()
}

// RECTENGL

function clearFocus() {
    gMeme.lines.forEach(line => line.isFocused = false)
}

function renderFocus() {
    const lineObj = getFocused()
    if (!lineObj) return
    gCtx.strokeStyle = 'rgba(255, 0, 0, 0.5)'
    gCtx.lineWidth = 3
    if (lineObj.align === 'left') {
        const begginingX = lineObj.posX - 5
        const begginingY = lineObj.posY - lineObj.fontSize
        const textWidth = gCtx.measureText(lineObj.txt).width
        const endingX = textWidth + 10
        const endingY = lineObj.fontSize + (lineObj.fontSize / 7)
        gCtx.beginPath();
        gCtx.rect(begginingX, begginingY, endingX, endingY);
        gCtx.stroke();
    } else if (lineObj.align === 'right') {
        const textWidth = gCtx.measureText(lineObj.txt).width
        const begginingX = (lineObj.posX - textWidth) - 5
        const begginingY = lineObj.posY - lineObj.fontSize
        const endingX = textWidth + 10
        const endingY = lineObj.fontSize + (lineObj.fontSize / 7)
        gCtx.beginPath();
        gCtx.rect(begginingX, begginingY, endingX, endingY);
        gCtx.stroke();
    } else if (lineObj.align === 'center') {
        const textWidth = gCtx.measureText(lineObj.txt).width
        const begginingX = (lineObj.posX - (textWidth / 2)) - 5
        const begginingY = lineObj.posY - lineObj.fontSize
        const endingX = textWidth + 10
        const endingY = lineObj.fontSize + (lineObj.fontSize / 7)
        gCtx.beginPath();
        gCtx.rect(begginingX, begginingY, endingX, endingY);
        gCtx.stroke();
    }

}