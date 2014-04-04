var image = new ol.style.Circle({
  radius: 5,
  fill: null,
  stroke: new ol.style.Stroke({color: 'red', width: 1})
});

var styles = {
  'Point': [new ol.style.Style({
    image: image
  })],
  'LineString': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 1
    })
  })],
  'MultiLineString': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 1
    })
  })],
  'MultiPoint': [new ol.style.Style({
    image: image
  })],
  'MultiPolygon': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
  })],
  'Polygon': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
  })],
  'GeometryCollection': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'red'
    }),
    image: new ol.style.Circle({
      radius: 10,
      fill: null,
      stroke: new ol.style.Stroke({
        color: 'red'
      })
    })
  })],
  'Circle': [new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
  })]
};

var styleFunction = function(feature, resolution) {
  return styles[feature.getGeometry().getType()];
};

var vectorSource = new ol.source.GeoJSON(
    /** @type {olx.source.GeoJSONOptions} */ ({
      object: {
        'type': 'FeatureCollection',
        'crs': {
          'type': 'name',
          'properties': {
            'name': 'EPSG:3857'
          }
        },
        'features': [
          {
            "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            17195.240239257713,
                            6761587.769502985
                        ],
                        [
                            17193.951863798222,
                            6761586.225031374
                        ],
                        [
                            17195.74955684764,
                            6761584.733140989
                        ],
                        [
                            17192.766509448695,
                            6761581.002465964
                        ],
                        [
                            17191.713269022508,
                            6761579.221236949
                        ],
                        [
                            17190.897640898886,
                            6761577.287325407
                        ],
                        [
                            17190.469609967244,
                            6761575.9083159035
                        ],
                        [
                            17190.3533247291,
                            6761575.029817095
                        ],
                        [
                            17190.34520588261,
                            6761574.97341903
                        ],
                        [
                            17190.16384254982,
                            6761573.748925663
                        ],
                        [
                            17190.299294883742,
                            6761572.320855593
                        ],
                        [
                            17190.69420493019,
                            6761570.933645301
                        ],
                        [
                            17191.42444012602,
                            6761569.423222193
                        ],
                        [
                            17193.67949443886,
                            6761563.789641241
                        ],
                        [
                            17195.345453326834,
                            6761561.552411436
                        ],
                        [
                            17194.16529562444,
                            6761561.160164224
                        ],
                        [
                            17193.43338913216,
                            6761560.916459232
                        ],
                        [
                            17191.69085428891,
                            6761560.33697663
                        ],
                        [
                            17182.626033810473,
                            6761557.320533116
                        ],
                        [
                            17180.467847109463,
                            6761562.4075063635
                        ],
                        [
                            17179.14868472265,
                            6761565.513164826
                        ],
                        [
                            17178.898185793805,
                            6761566.104773169
                        ],
                        [
                            17178.19067025455,
                            6761567.290872359
                        ],
                        [
                            17176.775960822455,
                            6761568.578837189
                        ],
                        [
                            17173.465597679875,
                            6761571.266111016
                        ],
                        [
                            17167.649219896943,
                            6761576.001892565
                        ],
                        [
                            17160.638653615755,
                            6761581.84109606
                        ],
                        [
                            17157.99797945499,
                            6761584.249607339
                        ],
                        [
                            17157.104107803138,
                            6761584.808493199
                        ],
                        [
                            17165.37190264723,
                            6761595.666354028
                        ],
                        [
                            17165.47420102549,
                            6761595.577555915
                        ],
                        [
                            17176.206921555164,
                            6761586.509690928
                        ],
                        [
                            17177.125117460106,
                            6761585.899916427
                        ],
                        [
                            17178.9478423666,
                            6761585.31188907
                        ],
                        [
                            17179.995606105505,
                            6761585.264662312
                        ],
                        [
                            17181.53908796141,
                            6761585.607309764
                        ],
                        [
                            17182.457438490503,
                            6761586.097939157
                        ],
                        [
                            17183.468814622804,
                            6761587.006556853
                        ],
                        [
                            17186.636403807828,
                            6761590.974507505
                        ],
                        [
                            17187.30530562569,
                            6761591.763812794
                        ],
                        [
                            17188.58480710536,
                            6761593.281039186
                        ],
                        [
                            17192.66053032789,
                            6761589.89140905
                        ],
                        [
                            17194.832135837616,
                            6761588.106863558
                        ],
                        [
                            17195.240239257713,
                            6761587.769502985
                        ]
                    ]
                ]
            ]
        }
          }
        ]
      }
    }));

var vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  style: styleFunction
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer
  ],
  renderer: 'canvas',
  target: 'map',
  view: new ol.View2D({
    center: [
                            17195.240239257713,
                            6761587.769502985
                        ],
    zoom: 18
  })
});