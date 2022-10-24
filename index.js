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

// Creating a variable for coordinates
var nyc = { lat: 40.71, lng: -74.006 }

// Creating a marker
var marker = new L.Marker(nyc);

// Adding marker to the map
marker.addTo(map);

// Adding pop-up to the marker
marker.bindPopup('New York City').openPopup();


let countries = [];

$.get("https://disease.sh/v3/covid-19/countries", function(data, status){
    try {
        countries = data;
        console.log("countries", countries)
        $("#death").text(countries[0].deaths)
        $("#recovered").text(countries[0].recovered)
        $("#cases").text(countries[0].cases)

        // this loops through all countries for the select option drop down menu
        countries.forEach((value, index) => {
            $("#country").append($('<option value="' + index + '">' + value.country + '</option>'));
            
        })
    } catch(e) {
        console.error("Error getting Country Data", e)
    }
});


// 
$.get("https://disease.sh/v3/covid-19/all", function(international, status){
    try {
        console.log("international data", international)
        // console.log(countries)
        $("#death_international").text(international.deaths)
        $("#recovered_international").text(international.recovered)
        $("#cases_international").text(international.cases)        
    } catch(e) {
        console.error("Error getting Int'l Data", e)
    }
});

// 

function selectCountry(index) {
    $("#death").text(countries[index].deaths)
    $("#recovered").text(countries[index].recovered)
    $("#cases").text(countries[index].cases)
}


// 45:44

// 
            // this will show the country and its number of cases today
            // console.log(value.country)
            // console.log(value.todayCases)
            // console.log(value.todayDeaths)
            // 
            // this will get country id
            // console.log(value.countryInfo._id)
            // 
            // this will get country flag
            // console.log(value.country)
            // console.log(value.countryInfo.flag)