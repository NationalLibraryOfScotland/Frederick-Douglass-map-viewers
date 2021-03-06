'Our Bondage and Our Freedom' - Frederick Douglass in Edinburgh and Scotland - map viewers
==========================================================================================

These <a href="https://geo.nls.uk/maps/douglass/index.html">map viewers</a> form part of the <a href="https://www.ed.ac.uk/literatures-languages-cultures/research/current-projects/our-bondage-and-our-freedom" >Our Bondage and Our Freedom project</a>, celebrating the 200 year anniversary of the birth of African American activist and author, Frederick Douglass, in 2018. 

The <a href="https://geo.nls.uk/maps/douglass/index.html">map viewers</a> use <a href="http://openlayers.org">OpenLayers 4.4.2</a> for the map interface, <a href="http://jqueryui.com/">JQuery</a> to provide a scrollable left panel linking from the points on the map, and <a href="https://www.maptiler.com/desktop/">MapTiler</a> georeferenced mosaics of historical maps of Scotland and Edinburgh. 

The viewer includes a <a href="https://geo.nls.uk/maps/douglass/">map of the places in Edinburgh</a> where Frederick Douglass lived, held meetings and gave speeches during his antislavery campaign. There are also map viewers showing <a href="https://geo.nls.uk/maps/douglass/abolitionists.html">Black Abolitionists in Edinburgh</a>, and the places associated with <a href="https://geo.nls.uk/maps/douglass/scotland.html">Frederick Douglass in Scotland</a>.

Each of the three map viewers - index.html, abolitionists.html, and scotland.html has a specific Javascript file of the same name in the scripts folder, which forms the main bespoke functionality and content for each viewer. This file is commented to explain the specific content and functions within it.

The locations associated with Douglass and the Black Abolitionists are shown using <a href="http://geojson.org/geojson-spec.html">GeoJSON</a> sets of points. The unique numbers of these points are used to link between the leftpanel texts and the points on the map, and from the points on the map to the leftpanel text.

The content for this map has principally been gathered by Dr Celeste Marie-Bernier, with assistance from Nick Batho and Andrew Taylor. The map viewers have been put together by Chris Fleet.
