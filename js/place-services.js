let elMap
let gMarkers = [];

var gCurrLat
var gCurrLng

function getCoords() {
    return {
        lat: gCurrLat,
        lng: gCurrLng
    }
}

function initMap() {
    elMap = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 29.55805,
            lng: 34.94821
        },
        zoom: 16,
    });

    elMap.addListener("click", (ev) => {
        placeMarkerAndPanTo(ev.latLng, elMap);
    });
}


function getCurrPosition() {
    if (!navigator.geolocation) {
        return;
    }

    navigator.geolocation.getCurrentPosition(getLocation);
}


function getLocation(position) {
    initMapCurrLocation(position.coords.latitude, position.coords.longitude);
}

function initMapCurrLocation(lat, lng) {
    elMap = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat,
            lng
        },
        zoom: 16
    });
    elMap.addListener("click", (ev) => {
        placeMarkerAndPanTo(ev.latLng, elMap);
    });
}


function placeMarkerAndPanTo(latLng) {

    const marker = new google.maps.Marker({
        position: latLng,
        map: elMap,
    });
    elMap.panTo(latLng);
    gMarkers.push(marker);
    // createPlace(latLng)
    gCurrLat = marker.getPosition().lat()
    gCurrLng = marker.getPosition().lng()

    elMap.panTo(marker.getPosition())
    onMarkPlace(gCurrLat,gCurrLat)
}
// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (let i = 0; i < gMarkers.length; i++) {
        gMarkers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    gMarkers = [];
}