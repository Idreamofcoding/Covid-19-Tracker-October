// let map;

// function initMap() {
//     const nyc = { lat: 40.7128, lng: 74.0060 }
//     map = new google.maps.Map(document.getElementById("map"), {
//     center: nyc,
//     zoom: 8,
//     });
// }
// window.initMap = initMap;


// step 1 done with Leaflet.js


// var map = L.map('map').setView([ 40.71, -74.006], 10);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


// $.get("https://disease.sh/v3/covid-19/countries", function(data, status){
//     console.log(data);
//     console.log(status);
//     });




var map = L.map('map').setView([ 40.71, -74.006], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


