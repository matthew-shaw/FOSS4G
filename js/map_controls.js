var map = new ol.Map({
  controls: ol.control.defaults().extend([
    new ol.control.FullScreen(),
    //new ol.control.MousePosition(),
    new ol.control.ScaleLine()
  ]),

  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],

  target: 'map',

  view: new ol.View2D({
    center: [0,0],
    zoom: 2
  })
});