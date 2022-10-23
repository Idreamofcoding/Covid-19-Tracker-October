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


let countries = [];

$.get("https://disease.sh/v3/covid-19/countries", function(data, status){
    try {
        countries = data;
        $("#death").text(countries[0].deaths)
        $("#recovered").text(countries[0].recovered)
        $("#cases").text(countries[0].cases)

        // this loops through all countries for the select option drop down menu
        countries.forEach((value, index) => {
            $("#country").append($('<option value="' + index + '">' + value.country + '</option>'));
            // console.log(value)
            console.log(value)
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
        })
    } catch(e) {
        console.error("Error getting Country Data", e)
    }
});


function selectCountry(index) {
    $("#death").text(countries[index].deaths)
    $("#recovered").text(countries[index].recovered)
    $("#cases").text(countries[index].cases)
}


// 45:44