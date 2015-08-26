'use strict';

const icon = '/img/surfboard-icon.png';
let markers = [];

export var PinDropper = {

  dropNewPin: function(data) {

    _clearCurrentMarkers();

    let marker = _createMarker(data);
    markers.push(marker);
    
    let infoWindow = _createInfoWindow(data);

    global.map.setZoom(7);
    global.map.panTo(marker.getPosition());
    infoWindow.open(global.map, marker);

  }
};

function _clearCurrentMarkers() {

  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function _createMarker(data){
  let position = new google.maps.LatLng(data.lat, data.lng);

  let marker = new google.maps.Marker({
    position: position,
    map: global.map,
    icon: icon,
    animation: google.maps.Animation.DROP
  });
  
  return marker;
  
}

function _createInfoWindow(data){
  let infowindow = new google.maps.InfoWindow({
    content: data.surfcard
  });
  
  google.maps.event.addListener(infowindow,
    'closeclick', function() {
      _clearCurrentMarkers();
      $('.search-container').show();
    });
  
  return infowindow;
  
}