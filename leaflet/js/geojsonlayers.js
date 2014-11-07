var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

var osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),
  grayscale = L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr});

var map = L.map('map', {
  center: [39.74739, -105],
  zoom: 14,
  layers: [grayscale]
});

var baseballIcon = L.icon({
  iconUrl: 'img/baseball-marker.png',
  iconSize: [32, 37],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

function onEachFeature(feature, layer) {
  var popupContent = "<p>I started out as a GeoJSON " +
      feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

  if (feature.properties && feature.properties.popupContent) {
    popupContent += feature.properties.popupContent;
  }

  layer.bindPopup(popupContent);
}

var bicycleRental = L.geoJson(bicycleRental, {

  style: function (feature) {
    return feature.properties && feature.properties.style;
  },

  onEachFeature: onEachFeature,

  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    });
  }
}).addTo(map);

var lightRailStop = L.geoJson(lightRailStop, {

  style: function (feature) {
    return feature.properties && feature.properties.style;
  },

  onEachFeature: onEachFeature,

  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 8,
      fillColor: "#0000ff",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    });
  }
}).addTo(map);

var campus = L.geoJson(campus, {

  style: function (feature) {
    return feature.properties && feature.properties.style;
  },

  onEachFeature: onEachFeature,
}).addTo(map);

var freeBus = L.geoJson(freeBus, {

  filter: function (feature, layer) {
    if (feature.properties) {
      // If the property "underConstruction" exists and is true, return false (don't render features under construction)
      return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
    }
    return false;
  },

  onEachFeature: onEachFeature
}).addTo(map);

var coorsLayer = L.geoJson(coorsField, {

  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: baseballIcon});
  },

  onEachFeature: onEachFeature
}).addTo(map);

var baseLayers = {
  "OpenStreetMap": osm,
  "Grayscale": grayscale
};

var overlays = {
  "Campus": campus,
  "Bicycle Rental": bicycleRental,
  "Free Bus": freeBus,
  "Coors Field": coorsLayer,
  "Light Rail Stop": lightRailStop
};

L.control.layers(baseLayers, overlays).addTo(map);
