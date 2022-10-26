// Creating a variable for coordinates
var nyc = { lat: 40.71, lng: -74.006 }

var map = L.map('map').setView([ 40.71, -74.006], 8);

$("#map").height(400).width(900);
map.invalidateSize();


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)


let countries = [];

$.get("https://disease.sh/v3/covid-19/countries", function(data, status){
    try {
        countries = data;
        console.log("dog", data)
        console.log("countries", countries)
        $("#death").text(countries[0].deaths)
        $("#recovered").text(countries[0].recovered)
        $("#cases").text(countries[0].cases)

        // this loops through all countries for the select option drop down menu
        countries.forEach((value, index) => {
            $("#country").append($('<option value="' + index + '">' + value.country + '</option>'));

            // // Creating a marker
            var marker = new L.marker([value.countryInfo.lat, value.countryInfo.long]).addTo(map);


            // Adding marker to the map
            marker.addTo(map);

            var htmlForPopup = `
                    <div>
                        <b><h3>${value.country}</h3></b>
                        <div>
                            <span>Population</span>
                            <span>${value.population}</span>
                            <br>
                            <span>Today's Cases</span>
                            <span>${value.todayCases}</span>
                            <br>
                            <span>Today's Deaths</span>
                            <span>${value.todayDeaths}</span>
                            <br>
                            <span>Today's Recovered</span>
                            <span>${value.todayRecovered}</span>
                            <br>
                            <span>Critical</span>
                            <span>${value.critical}</span>
                        </div>
                    </div>
                `;
            marker.bindPopup(htmlForPopup).openPopup();
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
    const loc = { lat: countries[index].countryInfo.lat, lng: countries[index].countryInfo.long }
    
    map.setView(new L.LatLng([loc]), 8);
    $("#death").text(countries[index].deaths)
    $("#recovered").text(countries[index].recovered)
    $("#cases").text(countries[index].cases)

    // map.setCenter(loc)
    // const Lat = countries[index].countryInfo.lat
    // const Long = countries[index].countryInfo.long

    // var LongLat = [Long, Lat];
    // parsedTest = JSON.parse(LongLat); //an array [1,2]
    // var marker = new L.marker([value.countryInfo.lat, value.countryInfo.long]).addTo(map);

    // map.panTo(new L.LatLng()
    // SetViewOnClick()
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