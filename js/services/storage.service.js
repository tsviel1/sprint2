'use strict'
const STORAGE_KEY = 'memesDB'

function saveToStorage(val) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}

function loadFromStorage() {
	var val = localStorage.getItem(STORAGE_KEY)
	return JSON.parse(val)
}