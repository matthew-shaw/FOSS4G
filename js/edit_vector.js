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
                            14708.755563011973,
                            6761018.225448865
                        ],
                        [
                            14709.161068287178,
                            6761018.294465071
                        ],
                        [
                            14708.435732840697,
                            6761024.966253572
                        ],
                        [
                            14708.398674280676,
                            6761025.355691914
                        ],
                        [
                            14714.628369111884,
                            6761025.901180545
                        ],
                        [
                            14717.462192686182,
                            6761026.222616948
                        ],
                        [
                            14717.677197182695,
                            6761025.2939769225
                        ],
                        [
                            14725.204510948624,
                            6761026.060307912
                        ],
                        [
                            14736.21162987126,
                            6761027.161480935
                        ],
                        [
                            14746.571356929484,
                            6761028.200718575
                        ],
                        [
                            14747.634241033204,
                            6761019.269821937
                        ],
                        [
                            14747.80142376746,
                            6761017.808601182
                        ],
                        [
                            14747.361857752814,
                            6761008.274526637
                        ],
                        [
                            14747.14251453567,
                            6761000.756663681
                        ],
                        [
                            14745.669362713881,
                            6760988.98754546
                        ],
                        [
                            14737.630035003409,
                            6760990.032371336
                        ],
                        [
                            14732.52917425383,
                            6760989.45379999
                        ],
                        [
                            14732.80216481544,
                            6760987.746763348
                        ],
                        [
                            14730.376216412868,
                            6760987.575185578
                        ],
                        [
                            14728.694414239853,
                            6760987.462691532
                        ],
                        [
                            14728.6877217654,
                            6760987.786512725
                        ],
                        [
                            14719.15462008965,
                            6760987.418812016
                        ],
                        [
                            14717.909630210603,
                            6760987.342050606
                        ],
                        [
                            14710.83331394239,
                            6760987.096473619
                        ],
                        [
                            14710.360977361106,
                            6761004.100649248
                        ],
                        [
                            14709.200607157567,
                            6761008.584527049
                        ],
                        [
                            14708.77297452414,
                            6761013.28964111
                        ],
                        [
                            14709.420367678382,
                            6761013.351564559
                        ],
                        [
                            14708.755563011973,
                            6761018.225448865
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

var select = new ol.interaction.Select();

var modify = new ol.interaction.Modify({
  features: select.getFeatures()
});

var typeSelect = document.getElementById('type');

var map = new ol.Map({
  interactions: ol.interaction.defaults().extend([select, modify]),
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
                            14708.755563011973,
                            6761018.225448865
                        ],
    zoom: 18
  })
});

function addInteraction() {
  draw = new ol.interaction.Draw({
    source: new ol.source.Vector(),
    type: ol.geom.Polygon
  });
  map.addInteraction(draw);
}

addInteraction();