'use strict'

function moveToSetting() {
    window.location.href = 'pages/setting.html'
}

function moveToMap() {
    window.location.href = 'pages/map.html'
}

function onInit() {
    document.body.style.backgroundColor = getColor()
    renderPlaceDetsils()
    // console.log('getColor:', getColor())

}

function onChooseColor() {
    var elColor = document.querySelector('input[name=color]')
    const color = elColor.value
    // console.log('color:', color)
    document.body.style.backgroundColor = color
    saveColor(color)
}

function renderPlaceDetsils() {
    let places = getPlaces()
    let strHTML = places.map(place =>
        `<div class="place bg-dark m-3"></div>`
    )

    document.querySelector('.places-container').innerHTML = strHTML
}

function onMarkPlace(lat, lng) {
    createPlace(lat, lng)
    renderPlaceDetsils()
}