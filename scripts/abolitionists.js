
	
	// a generic attribution variable for NLS historic map tilesets
	
	var NLS_attribution = new ol.Attribution({
	  html: 'Historic background maps courtesy of the <a href="https://maps.nls.uk/">National Library of Scotland</a>' 
	});


	var stamentoner = new ol.layer.Tile({
		title: 'Background map - Today (21st century)',
	        source: new ol.source.Stamen({
				attributions: new ol.Attribution({
	  				html: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://www.openstreetmap.org/copyright">ODbL</a>.'
					}),
	        		layer: 'toner'
	      })
	    });


	// the Web Tile Map Service layers from NLS - view full list at: https://maps.nls.uk/geo/explore/scripts/explore-layers


	var sixinch  = new ol.layer.Tile({
        	  preload: Infinity,
  	 	extent: ol.proj.transformExtent([-9.4, 54.5, -0.6, 60.9], 'EPSG:4326', 'EPSG:3857'),
                        preload: Infinity,
	            	title: "Scotland - OS Six Inch, 1843-1882",
			source: new ol.source.XYZ({
				url: "https://geo.nls.uk/mapdata3/os/6inchfirst/{z}/{x}/{y}.png",
				minZoom: 1,
				maxZoom: 16
		  	})
    });


	var edin1876 = new ol.layer.Tile({
	        	  preload: Infinity,
		title: "Ordnance Survey, Edinburgh, ca. 1876",
	extent: ol.proj.transformExtent([ -3.24989585975,55.9211654234,-3.12835862947, 55.9996605632], 'EPSG:4326', 'EPSG:3857'),
		source: new ol.source.XYZ({
					url: "https://geo.nls.uk/maps/towns/edinburgh1876/{z}/{x}/{-y}.png",
					minZoom: 11,
					maxZoom: 20
			  })	

	});
	
        var sixinch = new ol.layer.Group({
		title: "Ordnance Survey, ca. 1850",
		layers: [ sixinch, edin1876 ],
   		 });
	

	
	        var sixinch1876 = new ol.layer.Group({
		title: "Ordnance Survey, ca. 1877",
		layers: [ sixinch, edin1876 ],
   		 });


	var OS1900sGBback =  new ol.layer.Tile({
        	  preload: Infinity,
	            title: 'Background map - OS 1870s - 1900s',
		    source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
			          urls:[
			            'https://nls-0.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-1.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-2.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-3.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg'
			          ],
				minZoom: 1,
				maxZoom: 16



		}),
			        type: 'overlay', 
			        minx: -8.8, 
				miny: 49.8,
			        maxx: 1.77, 
			        maxy: 60.9
          });


	var OS1900sGBbackoverview =  new ol.layer.Tile({
        	  preload: Infinity,
	            title: 'Background map - OS 1900s',
		    source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
			          urls:[
			            'https://nls-0.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-1.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-2.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-3.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg'
			          ],
				minZoom: 1,
				maxZoom: 16



		}),
			        type: 'overlay', 
			        minx: -8.8, 
				miny: 49.8,
			        maxx: 1.77, 
			        maxy: 60.9
          });



	var OS1900sGBbackoverview =  new ol.layer.Tile({
        	  preload: Infinity,
	            title: 'Background map - OS 1900s',
		    source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
			          urls:[
			            'https://nls-0.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-1.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-2.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg',
			            'https://nls-3.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.jpg'
			          ],
				minZoom: 1,
				maxZoom: 16



		}),
			        type: 'overlay', 
			        minx: -8.8, 
				miny: 49.8,
			        maxx: 1.77, 
			        maxy: 60.9
          });

	var os25scotland1 =  new ol.layer.Tile({
        	  preload: Infinity,
		extent: ol.proj.transformExtent([-7.70343904,54.62907430,-0.76245137,60.82129362], 'EPSG:4326', 'EPSG:3857'),
	            title: 'Background map - OS 1900s',
		    source: new ol.source.XYZ({
				url: 'https://geo.nls.uk/mapdata2/os/25_inch/scotland_1/{z}/{x}/{y}.png',
				minZoom: 8,
				maxZoom: 18
		})
          });




   var edin1849 = new ol.layer.Tile({
        	  preload: Infinity,
	extent: ol.proj.transformExtent([ -3.24989585975,55.9211654234,-3.12835862947, 55.9996605632], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Edinburgh, OS [1849]",
	source: new ol.source.XYZ({
				url: "https://geo.nls.uk/maps/towns/edinburgh1849/{z}/{x}/{y}.png",
				minZoom: 2,
				maxZoom: 20
		  }),
        attribution: 'Overlay NLS <a href="https://maps.nls.uk/townplans/index.html" target="_blank">Ordnance Survey Town Plans, 1847-1895</a> home page'
});


	var ostwentyfiveinchGreatBritain  = new ol.layer.Group({
	            title: 'Background map - OS 1870s - 1900s',
                        preload: Infinity,
	layers: [ OS1900sGBback, os25scotland1],

        });


	// an array of the base layers listed above

	var baseLayers = [ostwentyfiveinchGreatBritain, stamentoner ];

	// makes the Stamen Toner layer visible

	OS1900sGBback.setVisible(true);


	// sets up the base layers as a drop-down list

	    var layerSelect = document.getElementById('layerSelect');
	    for (var x = 0; x < baseLayers.length; x++) {
	        // if (!baseLayers[x].displayInLayerSwitcher) continue;
	        var option = document.createElement('option');
		option.appendChild(document.createTextNode(baseLayers[x].get('title')));
	        option.setAttribute('value', x);
	        option.setAttribute('id', 'baseOption' + baseLayers[x].get('title'));
	        layerSelect.appendChild(option);
	    }

	 // function to change the baseLayer

           var changemap = function(index) {
	     map.getLayers().removeAt(0);
	     map.getLayers().insertAt(0,baseLayers[index]);
	     baselayerSelected = baseLayers[index];
	     baselayerSelected.setVisible(true);
	     setZoomLayers();
	   }

	// function to set appropriate map visibility based on zoom level

    function setZoomLayers() {


	var mapZoom = map.getView().getZoom();

	if (map.getLayers().getArray()[0].get('title') == 'Background map - Today (21st century)')

                     {

			   stamentoner.setVisible(true);
			   edin1876.setVisible(false);
		           OS1900sGBback.setVisible(false);
                           os25scotland1.setVisible(false);
		      }

	else 	if (mapZoom > 17)
                     {
			   edin1876.setVisible(true);
		           OS1900sGBback.setVisible(true);
                           os25scotland1.setVisible(false);
		      }

	else 	if ((mapZoom > 15) && (mapZoom < 18))
                     {
			   edin1876.setVisible(false);
		           OS1900sGBback.setVisible(true);
                           os25scotland1.setVisible(true);
		      }

	else 	if (mapZoom < 16)
                     {
			   edin1876.setVisible(false);
		           OS1900sGBback.setVisible(true);
                           os25scotland1.setVisible(false);
		      }
	}

           // Define styles for the circle markers

	   // the original blue circles for the points

            var circle_symbol = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 8,
                    fill: new ol.style.Fill({
                        color: 'rgba(66, 134, 244, 0.7)',
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(4, 48, 119, 0.9)',
                        width: 2
                    })
                })
            });

	// the golden circle selected style 

             var selectedStyle = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 12,
                    fill: new ol.style.Fill({
                        color: 'rgba(248,211,141,0.9)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0,0,0,0.8)',
                        width: 3
                    })
                })
            });



	   // this is the layer definition for the main points GEOJSON file showing locations of Black Abolitionists

	    var circles = new ol.layer.Vector({
        	  preload: Infinity,
        	  visible: true,
		  source: new ol.source.Vector({
		   url: 'https://geo.nls.uk/maps/douglass/scripts/abolitionists_edinburgh.js',
    		    format: new ol.format.GeoJSON(),
		  }),
		    style: circle_symbol,
		   // maxResolution: 305.748113140705
	    });

		// this removes the default OpenLayers attribution for map layers



	      var attribution = new ol.control.Attribution({
	        collapsible: false
	      });

	var maxExtent = [-357058.04992028826, 7545858.822424232, -351688.3486832547, 7551906.902287296];

	// the main ol map class

		var map = new ol.Map({
		  target: 'map',
		  renderer: 'canvas',
		  controls: ol.control.defaults({attribution: false}).extend([attribution, new ol.control.ScaleLine({ units:'metric' })]),
		  layers: [OS1900sGBback, os25scotland1, edin1876, circles],
		  logo: false,
                  loadTilesWhileAnimating: true,
		  view: new ol.View({
		    center: ol.proj.transform([-3.188, 55.952], 'EPSG:4326', 'EPSG:3857'),
		    zoom: 15,
		    extent: maxExtent,
		    minZoom: 13,
		    maxZoom: 20
		  })
		});4


		// this is the statement for the small overview map - can be removed by removing it from the map controls line below

		var overviewMapControl = new ol.control.OverviewMap({
		  // see in overviewmap-custom.html to see the custom CSS used
		  className: 'ol-overviewmap ol-custom-overviewmap',
		  layers: [OS1900sGBbackoverview ],
		  collapseLabel: '\u00AB',
		  label: '\u00AB',
		  collapsed: false
		});

	map.addControl(overviewMapControl);

	setZoomLayers();

        map.getView().on('change:resolution', setZoomLayers);



// geolocation scripts

		var view = map.getView();
	
		var geolocation = new ol.Geolocation({
	        projection: view.getProjection()
	      });
	
	
	
	      function el(id) {
	        return document.getElementById(id);
	      }
	
	
	      el('track').addEventListener('change', function() {


		if (this.checked) 
		{
		geolocation.setTracking(true);
			var coordinates = geolocation.getPosition();
	        	positionFeature.setGeometry(coordinates ?
	            	new ol.geom.Point(coordinates) : null);
		    	view.setCenter(coordinates);

		   if ( map.getLayers().getArray()[4].getSource().getFeatures().length < 1)
			{ map.getLayers().getArray()[4].getSource().addFeatures([accuracyFeature, positionFeature]); }
		}
		else
		{ 
		if (map.getLayers().getArray()[4].get("title") == "geolocation_vector")
			{  
			map.getLayers().getArray()[4].getSource().clear();
			}  
		}

	      });
	
	
	      // handle geolocation error.
	      geolocation.on('error', function(error) {
	        var info = document.getElementById('info');
	        info.innerHTML = error.message;
	        info.style.display = '';
	      });
	
	      var accuracyFeature = new ol.Feature();
	      geolocation.on('change:accuracyGeometry', function() {
	        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
	      });
	
	
	      var positionFeature = new ol.Feature();
	      positionFeature.setStyle(new ol.style.Style({
	        image: new ol.style.Circle({
	          radius: 6,
	          fill: new ol.style.Fill({
	            color: '#3399CC'
	          }),
	          stroke: new ol.style.Stroke({
	            color: '#fff',
	            width: 2
	          })
	        })
	      }));
	
	
	      geolocation.on('change:position', function() {
	        var coordinates = geolocation.getPosition();
	        positionFeature.setGeometry(coordinates ?
	            new ol.geom.Point(coordinates) : null);
		    	view.setCenter(coordinates);
	      });
	
		var geolocationVector = new ol.layer.Vector({
			  title: "geolocation_vector",
			  source: new ol.source.Vector({
	          features: [accuracyFeature, positionFeature]
	        })
	      });

	
		map.getLayers().insertAt(4, geolocationVector);
		
	// the featureOverlay for the selected vector features

            var selectedFeatures = [];

        // Unselect previous selected features

	function unselectPreviousFeatures() {
                var i;
                for(i=0; i< selectedFeatures.length; i++) {
                    selectedFeatures[i].setStyle(null);
                }
                selectedFeatures = [];
		jQuery( "#leftpanel > div > div" ).css( "background-color", "#150b02" );
            }


		var zoom = 16;


	      function flyTo(location, done) {
	        var duration = 4000;
	      //  var zoom = map.getView().getZoom();
	        var parts = 2;
	        var called = false;
	        function callback(complete) {
	          --parts;
	          if (called) {
	            return;
	          }
	          if (parts === 0 || !complete) {
	            called = true;
	            done(complete);
	          }
	        }
	        map.getView().animate({
	          center: location,
	          duration: duration
	        }, callback);
	        map.getView().animate({
	          zoom: zoom - 3,
	          duration: duration / 2
	        }, {
	          zoom: zoom,
	          duration: duration / 2
	        }, callback);
	      }

	// function executed when mouse enters leftpanel to select the resultslist div elements, find features in the GeoJSON file based on their ID, and zoom map to feature location

	jQuery( document ).ready(function() {
		jQuery("#leftpanel > div").on("mouseenter", function(event) {
			unselectPreviousFeatures(); 
			var listid = jQuery(this).data('layerid');
	// this line below ignores the resultslist div elements with dx or d0 at the top of the leftpanel
		if ((listid == 'dx') || (listid == 'd0' )) {unselectPreviousFeatures(); return; }
			var listitem = jQuery(this);
			jQuery(this).children().css( "background-color", "#cf881c" );
			var source = map.getLayers().getArray()[3].getSource();
			// unselectPreviousFeatures(); 
			source.forEachFeature( function(feature){
				if(feature.get('ID') === listid)
				// console.log(feature.get('ID'));
				selectedFeatures = [];
				selectedFeatures.push(feature);
				});
	       		var i;
	                for(i=0; i< selectedFeatures.length; i++) {
			selectedFeatures[0].setStyle(selectedStyle);
				coordinates = [];
				coordinates = selectedFeatures[0].getGeometry().getCoordinates();

			        view.animate({
			          center: coordinates,
				  zoom: 18,
			          duration: 1500
			        });

		//		flyTo(coordinates, function() {});
			}

		});


		jQuery("#leftpanel > div").on("mouseleave", function(event) {
			unselectPreviousFeatures(); 
		});  

	});

// function executed on map click to select features and highlight them in the leftpanel

	map.on('click', function(event) {

			unselectPreviousFeatures(); 

		                map.forEachFeatureAtPixel(event.pixel, function(feature) {

		                    feature.setStyle([
		                        selectedStyle, 

		                    ]);
		                   selectedFeatures.push(feature);


		if ((selectedFeatures.length > 0) && (selectedFeatures.length < 2)) {

		  		var selectedFx = selectedFeatures[0].get('ID');
		  		var selectedFxHash = "#" + selectedFx;

				      jQuery('#leftpanel').animate({
				        scrollTop: $("#d0").offset().top
				      }, 0, function(){
				        // Add hash (#) to URL when done scrolling (default click behavior)
				        // window.location.hash = hash;
				      });

				      jQuery('#leftpanel').animate({
				        scrollTop: $(selectedFxHash).offset().top
				      }, 1200, function(){
				        jQuery(selectedFxHash).children().css( "background-color", "#cf881c" );
				        // Add hash (#) to URL when done scrolling (default click behavior)
				        // window.location.hash = hash;
				      });

				}

			});
	});


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







