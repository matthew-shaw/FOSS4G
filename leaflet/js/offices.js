var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

var osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),
  grayscale = L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr});

var map = L.map('map', {
  center: [52.561928,-1.464854],
  zoom: 6,
  layers: [grayscale]
});

var lrIcon = L.icon({
  iconUrl: 'img/lr.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -10]
});

function onEachFeature(feature, layer) {
  layer.bindPopup("<h5><b>" + feature.properties.name + "</b></h5>" + feature.properties.address);
}

var lrOffices = L.geoJson(lrOffices, {

  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: lrIcon});
  },

  onEachFeature: onEachFeature
}).addTo(map);

var baseLayers = {
  "OpenStreetMap": osm,
  "Grayscale": grayscale
};

var overlays = {
  "Offices": lrOffices
};

L.control.layers(baseLayers, overlays).addTo(map);
