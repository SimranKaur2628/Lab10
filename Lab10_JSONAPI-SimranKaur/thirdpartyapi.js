/*function initMap() {
  //set up a location
  

  let mapSpot = document.getElementById("map");

  let map = new google.maps.Map(mapSpot, {
    zoom: 15,
    center: georgian,
  });

  let marker = new google.maps.Marker({ position: georgian, map: map });
}*/

let map;
let infoWindow;
let mapSpot = document.getElementById("map");
let georgian = {
  lat: -34.397,
  lng: 150.644
};

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

  //try geolocation

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent("You are here.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service has failed."
      : "Error: Your browser doesn't support geolocation"
  );
  infoWindow.open(map);
}
