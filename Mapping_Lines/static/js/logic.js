// Add console.log to check to see if our code is working.          
console.log("working"); 

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the line.                              13.4.3
// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);
  

<<<<<<< HEAD
// We create the tile layer that will be the background of our map.
=======
// We create the second tile layer that will be the background of our map.
>>>>>>> 1fc63c269ad556f38a3b1425d7526e8b859de550
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
<<<<<<< HEAD
satelliteStreets.addTo(map);
=======
satelliteStreets.addTo(map);
>>>>>>> 1fc63c269ad556f38a3b1425d7526e8b859de550
