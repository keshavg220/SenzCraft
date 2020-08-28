function showMarker() {
	var mark = new markerjs.MarkerArea(document.getElementById('myImage'));
	mark.show(function(dataUrl) {
	    var res = document.getElementById("myImage");
	    res.setAttribute('crossOrigin', 'anonymous');
	    res.src = dataUrl;
	});
}