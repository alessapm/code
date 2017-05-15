document.addEventListener('DOMContentLoaded', function() {

  // Cached query selections...

  var mapLocations = document.querySelector('#map-locations');
  var googleMap = document.querySelector('#google-map');

  console.log('App.js connected!');

  var map;
  var googleMapWindow;
  var exposedVenue = {lat: 40.720583, lng: -74.001472};
  var nearbySearchParameters = {
    location: exposedVenue,
      radius: 500,
      name: 'The Farm Soho 447 Broadway'
  }

  function mapInit (mapFocus) {

    map = new google.maps.Map(document.getElementById('google-map'), {
      center: exposedVenue,
      zoom: 16
    });

    googleMapWindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(mapFocus, callback);
  }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      googleMapWindow.setContent(place.name);
      googleMapWindow.open(map, this);
    });
  }

  mapInit(nearbySearchParameters);

  document.querySelector('#map-locations').addEventListener('click', function(e) {
    if(e.target && e.target.matches('li.tab')) {
      document.querySelector('.map-tab-active').classList.remove('map-tab-active');
      e.target.classList.add('map-tab-active');
    }

    switch (e.target.getAttribute('id')) {
      case 'map-venue':
        nearbySearchParameters = {
          location: exposedVenue,
          radius: 600,
          name: 'The Farm Soho 447 Broadway'
        }
        break;
      case 'map-eatdrink':
        nearbySearchParameters = {
          location: exposedVenue,
          radius: 600,
          type: 'restaurant'
        }
        break;
      case 'map-explore':
        nearbySearchParameters = {
          location: exposedVenue,
          radius: 600,
          type: 'point_of_interest|art'
        }
        break;
      case 'map-stay':
        nearbySearchParameters = {
          location: exposedVenue,
          radius: 600,
          type: 'lodging'
        }
        break;
    }

    mapInit(nearbySearchParameters);
  })

});
