
// function initialize() {
//       var marcadores = [
//         ['León', 42.603, -5.577],
//         ['Salamanca', 40.963, -5.669],
//         ['Zamora', 41.503, -5.744]
//       ];
//       var map = new google.maps.Map(document.getElementById('mapa'), {
//         zoom: 7,
//         center: new google.maps.LatLng(41.503, -5.744),
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       });
//       var infowindow = new google.maps.InfoWindow();
//       var marker, i;
//       for (i = 0; i < marcadores.length; i++) {  
//         marker = new google.maps.Marker({
//           position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
//           map: map
//         });
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//           return function() {
//             infowindow.setContent(marcadores[i][0]);
//             infowindow.open(map, marker);
//           }
//         })(marker, i));
//       }
//     }
//     google.maps.event.addDomListener(window, 'load', initialize);

    var map;
      var infowindow;

      function initMap() {
        var mortagne = {lat: 48.521395, lng: 0.547133 };

       

        map = new google.maps.Map(document.getElementById('map'), {
          center: mortagne,
          zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: mortagne,
          radius: 500,
          type: ['store']
        }, callback);
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
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }



// to the top
      // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toHeaven").style.display = "block";
    } else {
        document.getElementById("toHeaven").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// end to the top

//parallax js
// $(document).ready(function(){
//   var $window = $(window);
//     $('section[data-type="background"]').each(function(){
//         var $bgobj = $(this); // assigning the object
    
//         $(window).scroll(function() {
//             var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
//             // Put together our final background position
//             var coords = '50% '+ yPos + 'px';

//             // Move the background
//             $bgobj.css({ backgroundPosition: coords });
//         }); 
//     });    
// });

// //menu transition js
// $(document).ready(function(){
//   $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//         if (scroll > 0) {
//       $(".navbar").addClass("navbar-scroll");
//         }
//         else{
//       $(".navbar").removeClass("navbar-scroll");    
//     }
//     if (scroll > 200) {
//       $(".navbar").addClass("bg-light");
//     }

//     else{
//       $(".navbar").removeClass("bg-light");   
//     }
//   })
// })


jQuery('document').ready( function($) {
    $('.gallery-filters li').on('click', function() {
        $('.gallery-filters li').removeClass('active');
        $(this).addClass('active');
        filter = $(this).attr('gallery-filter');

        $('.gallery-img-holder').each( function() {
            if (filter == 'all') {
                $(this).fadeIn(); 
            } else {
                $(this).hide();
                if ($(this).attr('filter-category') == filter) {
                    $(this).fadeIn();
                }
            }
        });
    });
});
