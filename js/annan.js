
	var DEFAULT_LON = -4.2445;
	var DEFAULT_LAT = 55.8561;
	var DEFAULT_ZOOM = 15;
	var pointClicked;

// necessary for use of Bing layers - generate your own at: https://msdn.microsoft.com/en-us/library/ff428642.aspx

	var BingapiKey = "AgS4SIQqnI-GRV-wKAQLwnRJVcCXvDKiOzf9I1QpUQfFcnuV82wf1Aw6uw5GJPRz";

// a generic attribution variable for NLS historic map tilesets
	
	var NLS_attribution = new ol.Attribution({
	  html: 'Historic Map Layer courtesy of the <a href="http://maps.nls.uk/">National Library of Scotland</a>' 
	});

// the Web Tile Map Service layers from NLS - view full list at: http://maps.nls.uk/geo/explore/scripts/explore-layers.js


	function loadOptions()
		{
		args = [];
		var hash = window.location.hash;
		if (hash.length > 0)
			{
			var elements = hash.split('&');
			elements[0] = elements[0].substring(1); /* Remove the # */
			for(var i = 0; i < elements.length; i++)
			{
			var pair = elements[i].split('=');
			args[pair[0]] = pair[1];
			}
		}
	}

	function setZoomLimit()
		{ 
		updateUrl();
		}

	function setPanEnd()
		{
		updateUrl();
		}

	function updateUrl()
		{
	
			if (pointClicked == undefined)
			{
			pointClicked = '0,0';
			}
			var centre = ol.proj.transform(map.getView().getCenter(), "EPSG:3857", "EPSG:4326");
			window.location.hash = "zoom=" + map.getView().getZoom()  + "&lat=" + centre[1].toFixed(4)  + "&lon=" + centre[0].toFixed(4) + "&point=" + pointClicked ; 
		}



	var glas1857 = new ol.layer.Tile({
		title: "Glasgow, OS [1857]",
		source: new ol.source.XYZ({
					url: "http://geo.nls.uk/maps/towns/glasgow1857/{z}/{x}/{-y}.png",
					minZoom: 8,
					maxZoom: 20
			  }),
	        visible: false,
	        attribution: 'Overlay NLS <a href="http://maps.nls.uk/townplans/index.html" target="_blank">Ordnance Survey Town Plans, 1847-1895</a> home page', 
	
	});




// OpenStreetMap

	var osm = new ol.layer.Tile({
	  	title: 'OpenStreetMap',
        	visible: false,
	  	source: new ol.source.OSM()
	});

// Bing layers
	
	var BingSatellite =   new ol.layer.Tile({
		title: 'Bing Satellite',
        	visible: false,
	        source: new ol.source.BingMaps({
			key: BingapiKey,
			imagerySet: 'Aerial'
		    })
	});

	var BingRoad = new ol.layer.Tile({
	        title: 'Bing Road',
        	visible: false,
	        source: new ol.source.BingMaps({
		      key: BingapiKey,
		      imagerySet: 'Road'
		    })
	});

	var BingAerialWithLabels = new ol.layer.Tile({
	        title: 'Bing Hybrid',
        	visible: false,
	        source: new ol.source.BingMaps({
			key: BingapiKey,
			imagerySet: 'AerialWithLabels'
		})
	});

// an array of the base layers listed above

	var overlayLayers = [glas1857];

// makes the Glasgow 1850s town plan layer visible

	glas1857.setVisible(true);



	var baseLayers = [ BingSatellite, BingRoad, osm ];

// makes the Bing Satellite layer visible

	BingSatellite.setVisible(true);


// sets up the base layers as a set of radio buttons

	var baselayerSelect = document.getElementById('baselayerSelect');
	    for (var x = 0; x < baseLayers.length; x++) {
	            var checked = (baseLayers[x].getVisible()) ? "checked" : "";
	            baselayerSelect.innerHTML += '<p><input type="radio" name="base" id="baseRadio'+ baseLayers[x].get('title') + 
			'" value="' + x + '" onClick="switchbaseLayer(this.value)" ' + checked + '><span>&nbsp;' + baseLayers[x].get('title') + '</span></p>';
	}


	

// the marker icon style for the Thomas Annan photos 

	   var iconStyle = new ol.style.Style({
		  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
		    anchor: [0.4, 41],
		    anchorXUnits: 'fraction',
		    anchorYUnits: 'pixels',
		    opacity: 0.75,
		    src: 'http://geo.nls.uk/maps/dev/thomas-annan/img/marker-icon-1x.png'
		  }))
		});

// this is the layer definition for the main Thomas Annan photos GEOJSON file

	    var photo_locations = new ol.layer.Vector({
        	  visible: true,
		  source: new ol.source.Vector({
		    url: 'http://geo.nls.uk/maps/dev/thomas-annan/js/pins.js',
    		    format: new ol.format.GeoJSON(),
		  }),
		    style: iconStyle,
		   // maxResolution: 305.748113140705
	    });




// the style for the Thomas Annan photos with an imprecise location 

            var circle = new ol.style.Style({
    		stroke: new ol.style.Stroke({
      			color: 'rgba(0, 0, 255, 0.9)',
      			width: 1
    		}),
                fill: new ol.style.Fill({
                        color: 'rgba(0,0,255, 0.1)',
                })
  	    });

// this is the layer definition for the radius circles for Thomas Annan photos with an imprecise location

	    var photo_circles = new ol.layer.Vector({
        	  visible: true,
		  source: new ol.source.Vector({
		    url: 'http://geo.nls.uk/maps/dev/thomas-annan/js/circles15.js',
    		    format: new ol.format.GeoJSON(),
		  }),
		    style: circle
	    });



	loadOptions();

	var currentZoom = DEFAULT_ZOOM;
	var currentLat = DEFAULT_LAT;
	var currentLon = DEFAULT_LON;

	if (args['zoom'])
		{
		currentZoom = args['zoom'];
		}
	if (args['lat'] && args['lon'])
		{
		currentLat = parseFloat(args['lat']); /* Necessary for lat (only) for some reason, otherwise was going to 90-val. Very odd... */
		currentLon = parseFloat(args['lon']);
		}
	if (args['zoom'] && args['lat'] && args['lon'])
		{
		defaultLLZ = false;
		}
	if (args['point'])
		{
		pointClicked = args['point'];
		}

		// this removes the default OpenLayers attribution for map layers

		var attribution = new ol.control.Attribution({
		  collapsible: true,
		  label: 'i',
		  collapsed: true,
		  tipLabel: 'Attributions'
		});


	var maxExtent = ol.proj.transformExtent([-4.2631,55.8476,-4.2330,55.8619], 'EPSG:4326', 'EPSG:3857');

	// the main ol map class

		var map = new ol.Map({
		  target: 'map',
		  renderer: 'canvas',
		  controls: ol.control.defaults({attribution: false}).extend([attribution, new ol.control.ScaleLine({ units:'metric' })]),
		  layers: [BingSatellite, glas1857, photo_circles, photo_locations],
		  view: new ol.View({
		    center: ol.proj.transform([currentLon, currentLat], 'EPSG:4326', 'EPSG:3857'),
		    zoom: currentZoom,
		    minZoom: 15,
		    maxZoom: 19,
		    extent: maxExtent
		  })
		});


	updateUrl();

// sets up the mapslider on the overlay layer

	jQuery('#mapslider').slider({
	  formater: function(value) {
	    opacity = value / 100;
	    map.getLayers().getArray()[1].setOpacity(opacity);
	    // overlay.layer.setOpacity(opacity);
	    return 'Opacity: ' + value + '%';
	  }
	});

// changes the overlay - not needed?

       function switchOverlay(index) {
	
		map.getLayers().getArray()[1].setVisible(false);
		map.getLayers().removeAt(1);
		map.getLayers().insertAt(1,overlayLayers[index]);
		overlaySelected = overlayLayers[index];
	    	overlaySelected.setVisible(true);
	}

// function to change the baseLayer

       function switchbaseLayer(index) {
	
		map.getLayers().getArray()[0].setVisible(false);
		map.getLayers().removeAt(0);
		map.getLayers().insertAt(0,baseLayers[index]);
		baselayerSelected = baseLayers[index];
	    	baselayerSelected.setVisible(true);
	}


// the featureOverlay for the selected vector features

            var selectedFeatures = [];

// Unselects previous selected features


      function unselectPreviousFeatures() {
                var i;
                for(i=0; i< selectedFeatures.length; i++) {
                    selectedFeatures[i].setStyle(null);
                }
                selectedFeatures = [];
            }


	var popup = new ol.Overlay({
	  element: document.getElementById('popup')
	});
	map.addOverlay(popup);



// the main selection of features and popover on mouse click

	map.on('click', function(evt) {
	  var element = popup.getElement();
	  var coordinate = evt.coordinate;

	  pixel = map.getPixelFromCoordinate(coordinate);


	
	  var feature = map.forEachFeatureAtPixel(pixel,
	      function(feature, layer) {
		selectedFeatures.push(feature);

		var coords = selectedFeatures[0].getGeometry().getCoordinates();
		
		espg3587 = [];
		espg3587 = ol.proj.transform(coordinate,"EPSG:3857", "EPSG:4326");
		
		
		pointClicked = [];
		pointClicked.push(espg3587[1].toFixed(4), espg3587[0].toFixed(6));
		updateUrl();

		  return feature;
		
		 }, null, function(layer) {
		return layer !== photo_circles;
		
		});
	  if (feature) {
	
	      $(element).popover('destroy');
	      popup.setPosition(coordinate);
	      // the keys are quoted to prevent renaming in ADVANCED mode.
	      $(element).popover({
	          'placement': 'top',
	          'animation': false,
	          'html': true,
	          'content': '<center><strong>' + feature.get('Place_Caption') + '</strong><br/><br/><a href="http://digital.nls.uk/learning/thomas-annan-glasgow/historical-maps/' + feature.get('Link') + '" ><img src="http://digital.nls.uk/learning/thomas-annan-glasgow/img/content/' + feature.get('Plate') + '.jpg" border="1" width="80" height="100" alt="Thomas Annan photograph of ' + feature.get('Place_Caption') + '" title="Thomas Annan photograph of ' + feature.get('Place_Caption') + '" ></center></a>'
	      });
	      $(element).popover('show');
	  } else {
	      $(element).popover('destroy');
	      popup.setPosition(undefined);
	      pointClicked = [0,0];
		updateUrl();
	  }
	});



// the main selection of features and popover on the URL having a point feature


	function pointClick(pointClicked)  {
		unselectPreviousFeatures();
		pointClicked2 = pointClicked.split(",");
		        pointClicked4 = [];
		pointClicked4.push(parseFloat(pointClicked2[1]),parseFloat(pointClicked2[0]));
		
		        coordinate = [];
		coordinate = ol.proj.transform(pointClicked4,"EPSG:4326", "EPSG:3857");
		
	
		var element = popup.getElement();
	
		pixel = map.getPixelFromCoordinate(coordinate);
	
		var feature = map.forEachFeatureAtPixel(pixel,
		      function(feature, layer) {
		//	selectedFeatures.push(feature);
		        return feature;

			});
		  if (feature) {
		
		      $(element).popover('destroy');
		      popup.setPosition(coordinate);
		      // the keys are quoted to prevent renaming in ADVANCED mode.
		      $(element).popover({
		          'placement': 'top',
		          'animation': false,
		          'html': true,
	          'content': '<center><strong>' + feature.get('Place_Caption') + '</strong><br/><br/><a href="http://digital.nls.uk/learning/thomas-annan-glasgow/historical-maps/' + feature.get('Link') + '" ><img src="http://digital.nls.uk/learning/thomas-annan-glasgow/img/content/' + feature.get('Plate') + '.jpg" border="1" width="80" height="100" alt="Thomas Annan photograph of ' + feature.get('Place_Caption') + '" title="Thomas Annan photograph of ' + feature.get('Place_Caption') + '" ></center></a>'
	      });
		      $(element).popover('show');
		  } else {
		      $(element).popover('destroy');
		      popup.setPosition(undefined);
		  }
	}



	map.getLayers().getArray()[1].getSource().on('tileloadend', function() {
	
// safe to call map.getPixelFromCoordinate from now on as layer loaded
	
		if (pointClicked)
		if ((pointClicked !== null) && (pointClicked.length > 5)  )
		{
		// timedText(pointClicked);
		pointClick(pointClicked);
		}
	     });


	map.on('moveend', setPanEnd);


	function setZoomLayers() {

	//	$("[data-toggle='popover']").popover('hide');
		$('#popup').popover('hide')
	}


map.getView().on('change:resolution', setZoomLayers);


// change cursor to pointer whilst hovering over features

		var cursorHoverStyle = "pointer";
		var target = map.getTarget();
		
		//target returned might be the DOM element or the ID of this element dependeing on how the map was initialized
		//either way get a jQuery object for it
		var jTarget = typeof target === "string" ? jQuery("#"+target) : jQuery(target);
		
		map.on("pointermove", function (event) {
		    var mouseCoordInMapPixels = [event.originalEvent.offsetX, event.originalEvent.offsetY];
		
		    //detect feature at mouse coords
		    var hit = map.forEachFeatureAtPixel(mouseCoordInMapPixels, function (feature, layer) {
		        return true;
		    });
		
		    if (hit) {
		        jTarget.css("cursor", cursorHoverStyle);
		    } else {
		        jTarget.css("cursor", "");
		    }
		});

// activates jQuery popovers

	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
	
