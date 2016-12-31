    jQuery(document).ready(function () {
        jQuery('#vmap_US').vectorMap({
          map: 'usa_en',
          backgroundColor: 'none',
          borderColor: 'black',
          enableZoom: false,
          showTooltip: true,
          selectedColor: null,
          hoverColor: '#b6d6ff',
          color:'#307fcf',
          onRegionClick: myFunction
        });
      });


function myFunction(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();
           //alert(message);
		if(code.toUpperCase() == 'MX'){
			document.getElementById("travel_location").innerHTML = region;
		}
	    else if(code.toUpperCase() == 'US'){
	      document.getElementById("bring_down").style.display = "block"
		  document.getElementById("vmap_NA").style.marginTop = "-367px";
		}
		else{
			document.getElementById("travel_location").innerHTML = region;
		}
    }

function bringDown(element, code, region)
    {
    	  document.getElementById("bring_down").style.display = "none";
		  document.getElementById("vmap_NA").style.marginTop = "0";
    }

jQuery(document).ready(function () {
        jQuery('#vmap_NA').vectorMap({
          map: 'north-america_en',
          backgroundColor: 'none',
          borderColor: 'black',
          enableZoom: false,
          showTooltip: true,
          selectedColor: null,
          hoverColor: '#b6d6ff',
          color:'#307fcf',
          onRegionClick: myFunction
        });
      });