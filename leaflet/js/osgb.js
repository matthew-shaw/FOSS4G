/* L.Map with OS options */
var map = new L.Map('map', {
  crs: L.OSOpenSpace.getCRS(),
  continuousWorld: true,
  worldCopyJump: false,
  minZoom: 2,
  maxZoom: L.OSOpenSpace.RESOLUTIONS.length - 1,
});

/* New L.TileLayer.OSOpenSpace with API Key */
openspaceLayer = L.tileLayer.osopenspace("FFB702322FE0714DE0430B6CA40A06C6", {debug: true});

map.addLayer(openspaceLayer);
map.setView([51.504, -0.159], 9);

/* add some ui elems to the map */

L.control.scale().addTo(map);

L.marker([51.504, -0.159])
  .addTo(map)
  .bindPopup('A pretty CSS3 popup.<br />Easily customizable.')
  .openPopup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);
