var map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: 37.7749295,
    lng: -122.4194155
  },
  zoom: 15,
  disableDefaultUI: true,
  zoomControl: true
});
var infoWindow = new google.maps.InfoWindow({
  map: map
});

// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    //                infoWindow.setPosition(pos);
    //                infoWindow.setContent('Your Are Here.');
    map.setCenter(pos);
    map.setZoom(17);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
var bounds = new google.maps.LatLngBounds();
map.fitBounds(bounds);
