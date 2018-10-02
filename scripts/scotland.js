
	
	// a generic attribution variable for NLS historic map tilesets
	
	var NLS_attribution = new ol.Attribution({
	  html: 'Historic background maps courtesy of the <a href="https://maps.nls.uk/">National Library of Scotland</a>' 
	});

	// this is the maximum extent as W,S,E,N that the map will show - increase or decrease as required

	var maxExtent = [-593954.8727119116, 7373060.976699922, -155512.07846814062, 7760138.087936055];

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


	var edin1849 = new ol.layer.Tile({
	        	  preload: Infinity,
		title: "Ordnance Survey, Edinburgh, ca. 1850",
		extent: ol.proj.transformExtent([-3.23836402347,55.9213663008,-3.1398868214, 55.9931028532], 'EPSG:4326', 'EPSG:3857'),
		source: new ol.source.XYZ({
					url: "https://geo.nls.uk/maps/towns/edinburgh1849/{z}/{x}/{y}.png",
					minZoom: 2,
					maxZoom: 20
			  })	

	});

        var sixinch = new ol.layer.Group({
		title: "Ordnance Survey, ca. 1850",
		layers: [ sixinch, edin1849 ],
   		 });
	
	var edin1876 = new ol.layer.Tile({
	        title: "Ordnance Survey, Edinburgh, ca. 1876",
		extent: ol.proj.transformExtent([ -3.24989585975,55.9211654234,-3.12835862947, 55.9996605632], 'EPSG:4326', 'EPSG:3857'),
		source: new ol.source.XYZ({
				attributions: [new ol.Attribution({
	  				html: '<a href="https://maps.nls.uk/townplans/edinburgh1056_2.html">Ordnance Survey, <em>Town Plan of Edinburgh (1:1,056)</em> (1876-77)</a>  courtesy of the <a href="https://maps.nls.uk">National Library of Scotland</a>.' 
					})],
					url: "https://geo.nls.uk/maps/towns/edinburgh1876/{z}/{x}/{-y}.png",
					minZoom: 8,
					maxZoom: 22
			  })
	});
	
	        var sixinch1876 = new ol.layer.Group({
		title: "Ordnance Survey, ca. 1877",
		layers: [ sixinch, edin1876 ],
   		 });


	var OS1900sGBback =  new ol.layer.Tile({
        	  preload: Infinity,
	            title: 'Background map - OS 1850s - 1900s',
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


		}),

          });

   var arbroath = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-2.60764986877, 56.539950796, -2.56453587342, 56.5704254645], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Arbroath, OS [1858]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/arbroath/{z}/{x}/{-y}.png",
				minZoom: 12,
				maxZoom: 20
		  })

    });

var ayr = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-4.6708006238, 55.4374882994,-4.60305481147,55.4850348095], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Ayr, OS [1855]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/ayr/{z}/{x}/{-y}.png",
				minZoom: 12,
				maxZoom: 20
		  })

});

var dundee1857 = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-3.02656974554, 56.4487917066, -2.94643402056, 56.4762998097], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Dundee, OS [1857]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/dundee1857/{z}/{x}/{-y}.png",
				minZoom: 12,
				maxZoom: 20
		  })

});


   var edin1849 = new ol.layer.Tile({
        	  preload: Infinity,
	extent: ol.proj.transformExtent([ -3.24989585975,55.9211654234,-3.12835862947, 55.9996605632], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Edinburgh, OS [1849]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/edinburgh1849/{z}/{x}/{y}.png",
				minZoom: 2,
				maxZoom: 20
		  }),
    });

var falkirk = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-3.79697788109, 55.9934312659, -3.76539705789, 56.017643446], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Falkirk, OS [1858]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/falkirk/{z}/{x}/{-y}.png",
				minZoom: 13,
				maxZoom: 20
		  })

});

var glas1857 = new ol.layer.Tile({

	title: "Scotland, Town Plans - Glasgow, OS [1857]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/glasgow1857/{z}/{x}/{-y}.png",
				minZoom: 11,
				maxZoom: 20
		  })

});

var greenock = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-4.78382962654, 55.9261788475, -4.72753763266, 55.9655747154], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Greenock, OS [1857]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/greenock/{z}/{x}/{-y}.png",
				minZoom: 12,
				maxZoom: 20
		  })

});

var hawick = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-2.79808977222, 55.4160978694, -2.77411782495, 55.431137811], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Hawick, OS [1857-8]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/hawick/{z}/{x}/{-y}.png",
				minZoom: 13,
				maxZoom: 20
		  })

});

var kirkcaldy1855 = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-3.17555000877, 56.0951893949, -3.12895515209, 56.1283283979], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Kirkcaldy, OS [1855]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/kirkcaldy1855/{z}/{x}/{-y}.png",
				minZoom: 12,
				maxZoom: 20
		  })

});

var montrose = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-2.48622575227, 56.6964521539, -2.45378021931, 56.7193093768], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Montrose, OS [1861-2]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/montrose/{z}/{x}/{-y}.png",
				minZoom: 13,
				maxZoom: 20
		  })

});

var paisley = new ol.layer.Tile({
  	extent: ol.proj.transformExtent([-4.46105990416, 55.8124741092, -4.39412479599, 55.8595282899], 'EPSG:4326', 'EPSG:3857'),
	title: "Scotland, Town Plans - Paisley, OS [1858]",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/towns/paisley/{z}/{x}/{-y}.png",
				minZoom: 12,
				maxZoom: 20
		  })

});

var perth1860 = new ol.layer.Tile({

	title: "Scotland, Town Plans - Perth, OS 1:2,500, 1860",
	source: new ol.source.XYZ({
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
				url: "https://geo.nls.uk/maps/perth/74479254/{z}/{x}/{-y}.png",
				minZoom: 8,
				maxZoom: 19
		  })

});

	var ostownplans  = new ol.layer.Group({
                        preload: Infinity,
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
	            	layers: [os25scotland1, arbroath, ayr, dundee1857, edin1849, falkirk, glas1857, greenock, hawick, kirkcaldy1855, montrose, paisley, perth1860]
    });



	var ostwentyfiveinchGreatBritain  = new ol.layer.Group({
	            title: 'Background map - OS 1850s - 1900s',
                        preload: Infinity,
			          attributions: [
			            new ol.Attribution({html: '<a href=\'https://maps.nls.uk/\'>National Library of Scotland Historic Maps</a>'})
			          ],
	layers: [ OS1900sGBback, ostownplans],

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
		           OS1900sGBback.setVisible(false);
                           ostownplans.setVisible(false);
		      }

	else 	if (mapZoom > 15) 
                     {
		           OS1900sGBback.setVisible(false);
                           ostownplans.setVisible(true);
		      }
	else 	if (mapZoom < 16)
                     {
		           OS1900sGBback.setVisible(true);
                           ostownplans.setVisible(false);
		      }
	}

           // Define styles for the circle markers

	   // the original green circles for the points

            var circle_symbol = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 8,
                    fill: new ol.style.Fill({
                        color: 'rgba(43, 240, 29, 0.8)',
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(21, 20, 60, 0.9)',
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


	   // this is the layer definition for the main points GEOJSON file showing the locations of Frederick Douglass in Scotland

	    var circles = new ol.layer.Vector({
        	  preload: Infinity,
        	  visible: true,
		  source: new ol.source.Vector({
		   url: 'https://geo.nls.uk/maps/douglass/scripts/frederick_douglas_scotland.js',
    		    format: new ol.format.GeoJSON(),
		  }),
		    style: circle_symbol,
		   // maxResolution: 305.748113140705
	    });

		// this removes the default OpenLayers attribution for map layers

	      var attribution = new ol.control.Attribution({
	        collapsible: false
	      });

	// the main ol map class

		var map = new ol.Map({
		  target: 'map',
		  renderer: 'canvas',
		  controls: ol.control.defaults({attribution: false}).extend([attribution, new ol.control.ScaleLine({ units:'metric' })]),
		  layers: [OS1900sGBback, ostownplans, circles],
		  logo: false,
                  loadTilesWhileAnimating: true,
		  view: new ol.View({
		    center: ol.proj.transform([-3.64, 55.952], 'EPSG:4326', 'EPSG:3857'),
		    zoom: 8,
		    extent: maxExtent,
		    minZoom: 7,
		    maxZoom: 19
		  })
		});


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

		   if ( map.getLayers().getArray()[3].getSource().getFeatures().length < 1)
			{ map.getLayers().getArray()[3].getSource().addFeatures([accuracyFeature, positionFeature]); }
		}
		else
		{ 
		if (map.getLayers().getArray()[3].get("title") == "geolocation_vector")
			{  
			map.getLayers().getArray()[3].getSource().clear();
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
	
		map.getLayers().insertAt(3, geolocationVector);
		

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
		if ((listid == 'dx') || (listid == '0' )) {unselectPreviousFeatures(); return; }
			var listitem = jQuery(this);
			jQuery(this).children().css( "background-color", "#cf881c" );
			var source = map.getLayers().getArray()[2].getSource();
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
		                        // selectedTextStyleFunction(feature.get('SHEET'))
					// selectresultselement(feature.get('IMAGEURL'))
		                    ]);
		                   selectedFeatures.push(feature);

		if ((selectedFeatures.length > 0) && (selectedFeatures.length < 2)) {

		  		var selectedFx = selectedFeatures[0].get('ID');
		  		var selectedFxHash = "#d" + selectedFx;

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


