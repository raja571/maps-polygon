Multiple Polygons on map using Angularjs

Include below scripts to html
<script src="https://code.angularjs.org/1.3.14/angular.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js"></script>
    <script src="http://rawgit.com/angular-ui/angular-google-maps/2.0.X/dist/angular-google-maps.js"></script>
    
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAa6bwGgypTwnlpjGv5XFdP1Vamr2ow69k&callback=initMap"
  type="text/javascript"></script>
  
create one js file to write controller and include that into html.
when you are creating angular app inject "uiGmapgoogle-maps" module to render full map in browser.

Use directive "ui-gmap-google-map"
<ui-gmap-google-map center="map.center" zoom="map.zoom" draggable="false">

	center : making map position to center - allows coordinates longitude and latitude 
	Zoom: Zooming map allows number
	draggable : to drag polygan
	
Creating polygon "ui-gmap-polygon" : 
<ui-gmap-polygon ng-repeat="p in polygons track by p.id" path="p.path" stroke="p.stroke" visible="p.visible"
                 fill="p.fill" ></ui-gmap-polygon>
				 
	Repeat this directive to create number of polygon
	path: for polygon - allows coordinates longitude and latitude 
	stroke: stroke for polygon - allows number
	visible : to make visible particular polygon
	fill: fill color - allows color code

Setting marker "ui-gmap-marker" :
<ui-gmap-marker ng-repeat="m in polygons track by m.id" coords="m.marker" idkey="m.id" draggable="false">
        </ui-gmap-marker
		
	Repeat this directive to set marker
	coords: marking center position for polygon - allows coordinates longitude and latitude 
	idkey: unique id key

Keep HTML and JS files in one folder and run HTML file using local server.
	


	


