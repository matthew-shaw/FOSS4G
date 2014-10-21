//Define coordinate system using PROJ4 standards
var osgb = new L.Proj.CRS('EPSG:27700',
  '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000' +
  '+ellps=airy +datum=OSGB36 +units=m +no_defs',
  {
    resolutions: [2500, 1000, 500, 200, 100, 50, 25, 10, 5, 2.5, 1],
    bounds: L.bounds([1300000,0],[700000,0])
  }
);

//Leaflet map with OS options
var map = new L.Map('map', {
  crs: osgb,
  continuousWorld: true,
  worldCopyJump: false,
  minZoom: 1,
  maxZoom: 10,
});

//New OSOpenSpace layer with API Key
openspaceLayer = L.tileLayer.osopenspace("FFB702322FE0714DE0430B6CA40A06C6", {debug: true});
map.addLayer(openspaceLayer);

//Define name of CRS in GeoJSON using PROJ4
proj4.defs("urn:ogc:def:crs:EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs");

//The GeoJSON object, hard coded now but would be parameterised or Jinja-fied
//A polygon around Lincolns Inn Fields, London.
var geojson = {
    "type": "Feature",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:EPSG:27700"
        }
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    530647,
                    181419
                ],
                [
                    530855,
                    181500
                ],
                [
                    530917,
                    181351
                ],
                [
                    530713,
                    181266
                ],
                [
                    530647,
                    181419
                ]
            ]
        ]
    },
    "properties": {
        "name": "Lincoln's Inn Fields"
    }
};

//Add the GeoJSON to the map
L.Proj.geoJson(geojson, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map).bindPopup("<b>Type:</b> " + geojson.geometry.type +
  "<br/><b>Name:</b> " + geojson.properties.name +
  "<br/><b>CRS:</b> " + geojson.crs.properties.name +
  "<br/><b>Coordinates:</b> " + geojson.geometry.coordinates);

//Add a scale control to the map
L.control.scale().addTo(map);

//Add a popup on the geojson feature
var popup = L.popup();

function onMapClick(e) {
  popup
    .openOn(map);
}

map.on('click', onMapClick);

//Center map view on geojson polygon - Static now but should be dynamic using fitBounds
map.setView([51.516251, -0.11660500], 9);

//fitBounds(geojson.coordsToLatLng, 9)
