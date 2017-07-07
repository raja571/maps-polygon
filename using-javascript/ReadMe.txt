Multiple Polygons on map using Javascript

Include below js file in HTML file
<script src="https://maps.googleapis.com/maps/api/js?libraries=weather&sensor=false"></script>

Include belwo div in body
<div id="map"></div>

Initialize globar variables
	var map = null;
    var polygonpolygon = [];
	
Create Function to render map
		function initialize(val) { .... }
		
		val parameter is a value to hide the selected polygon
		
		var myOptions = {
                    zoom: 15,
                    center: new google.maps.LatLng(17.446172, 78.3401173),
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                    },
                    navigationControl: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
		Options are nothing but initializing defaults for map.
		center : making map position to center - allows coordinates longitude and latitude 
		Zoom: Zooming map allows number
		
		Rendering map to div#map
		map = new google.maps.Map(document.getElementById("map"),
                myOptions);
				
		create sample json contains coordinates for creating polygon
		example:
		var latlang = [
                {
                    "gachibowli": [
                        {
                            "lan": 17.450812,
                            "lat": 78.345604
                        }, {
                            "lan": 17.448652,
                            "lat": 78.348533
                        }, {
                            "lan": 17.442930,
                            "lat": 78.343244
                        }, {
                            "lan": 17.444752,
                            "lat": 78.341259
                        }]
				}]
				
	Use below code to create multiple polygons using for loop in ES6
			for (i in latlang) {
                    var polygonPoints = [];

                    for (j in latlang[i][Object.keys(latlang[i])[0]]) {
                        polygonPoints.push(new google.maps.LatLng(latlang[i][Object.keys(latlang[i])[0]][j].lan, latlang[i][Object.keys(latlang[i])[0]][j].lat));
                    }

                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latlang[i][Object.keys(latlang[i])[1]][0].lan, latlang[i][Object.keys(latlang[i])[1]][0].lat),
                    });

                    marker.setMap(map);
                    //console.log(polygonPoints)
                    var polygonOptions = {};
                    polygonOptions.fillColor = latlang[i]["fillColor"];
                    polygonOptions.strokeWeight = latlang[i]["strokeWeight"];

                    var polygon = new google.maps.Polygon(polygonOptions);
                    polygon.setPaths(polygonPoints);

                    if (Object.keys(latlang[i])[0] == val) {
                        polygon.setMap(null);
                    } else {
                        polygon.setMap(map);
                    }

                }
		Call the function "initialize()" on page load
				
		use below code to hide the polygon on selecting.
		function onChange() {
            var val = document.getElementById("select").value
            initialize(val);
        }
	
		