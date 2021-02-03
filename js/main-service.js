'use strict'
const KEY = 'PlaceKeeperDB'
const COLOR = 'backgrouncolor'

const gPlaces = []

function getPlaces(){
    return gPlaces
}

function saveColor(color) {
    saveToStorage(COLOR, color)
}

function getColor() {
    return loadFromStorage(COLOR)
}


function createPlace(lat, lng) {
    var place = {
        id: makeId(),
        lat,
        lng,
        name: 'Pukis house'
    }
    // console.log('place:', place)
    gPlaces.unshift(place)
    console.log('gPlaces:', gPlaces)
}









function _saveBookssToStorage() {
    saveToStorage(KEY, gBooks)
}