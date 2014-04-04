var map = new ol.Map({
  layers: [
  new ol.layer.Group({
    layers: [
    osm = new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    lr = new ol.layer.Tile({
      source: new ol.source.TileJSON({
        url: 'http://localhost:8080/geoserver/LR_TitleExtent/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=LR_TitleExtent:titleextent&maxFeatures=50&outputFormat=application/json',
        crossOrigin: 'anonymous'
      })
    })

    ]
  })
  ],
  target: 'map',
  view: new ol.View2D({
    center: [0,0],
    zoom: 2
  })
});