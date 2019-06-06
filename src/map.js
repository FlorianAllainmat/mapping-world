let map
let panorama;
const resetMapButton = document.querySelector("#reset-map")




function initMap() { 
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.829247,
            lng: -0.598307
        },
        zoom: 3,
        StreetViewControl: false
        
    });
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('panorama'), {
            position: {
                lat: 44.829247,
                lng: -0.598307
            },
            pov: {
                heading: 34,
                pitch: 10
            }
        }
    )
    addMapListeners()
}

function addMapListeners() {
    resetMapButton.addEventListener("click", resetMap)
}

function addMarkerOnMap(dream){
    const marker = new google.maps.Marker({
        position: dream.coordinates,
        map: map,
        icon: dream.done ? "image/marker-done.png" : "image/marker.png"
    });

    marker.addListener('click', function(){
        zoomOn(marker.getPosition());
    })
}

function zoomOn(position) {
    map.setZoom(20);
    map.setCenter(position);
    map.setMapTypeId("satellite")
}

function resetMap() {
    map.setZoom(3);
    map.setCenter({
        lat: 44.829247,
        lng: -0.598307
    });
    map.setMapTypeId("roadmap")
}


export {
    initMap,
    addMarkerOnMap
};