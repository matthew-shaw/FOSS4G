(function() {

    "use strict"; //enable strict mode for whole block

    var map,
      OSHQ = {
        WGS84: [50.936715, -1.4701989],
        OSGB: [437324, 115386]
      };


    function init() {

      var popup = L.popup(),
        openspaceLayer;

      /* L.Map with OS options */
      map = new L.Map('map', {
        crs: L.OSOpenSpace.getCRS(),
        continuousWorld: true,
        worldCopyJump: false,
        minZoom: 2,
        maxZoom: L.OSOpenSpace.RESOLUTIONS.length - 1,
      });

      /* New L.TileLayer.OSOpenSpace with API Key */
      openspaceLayer = L.tileLayer.osopenspace("FFB702322FE0714DE0430B6CA40A06C6", {debug: true});

      map.addLayer(openspaceLayer);
      map.setView(OSHQ.WGS84, 1);

      /* add some ui elems to the map */

      L.control.scale().addTo(map);

      L.marker(OSHQ.WGS84).addTo(map)
        .bindPopup("<b>Hello world!</b><br />I am at OSHQ.").openPopup();

      /* add some event callbacks */

      function onMapClick(e) {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
      }

      map.on('click', onMapClick);

  }

  window.onload = init;

} ());
