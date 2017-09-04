   var world_data = { us: '#307fcf', mx: '#307fcf', pe: '#307fcf', it: '#307fcf', ie: '#307fcf', gb: '#307fcf', de: '#307fcf', es: '#307fcf', fr: '#307fcf', bs: '#307fcf', jm: '#307fcf', ca: '#307fcf'};
   var us_data = { mo: '#307fcf', fl: '#307fcf', co: '#307fcf' };
   var world_data_hov = { us: '#b6d6ff', mx: '#b6d6ff', pe: '#b6d6ff', it: '#b6d6ff', ir: '#b6d6ff', gb: '#b6d6ff', de: '#b6d6ff', es: '#b6d6ff', fr: '#b6d6ff', bs: '#b6d6ff', jm: '#b6d6ff', ca: '#b6d6ff'};
   var us_data_hov = { mo: '#b6d6ff', fl: '#b6d6ff', co: '#b6d6ff' };
   var pic_data = {}; 

  jQuery(document).ready(function () {

             $.ajax({
                      type:"GET",
                      url: 'php/get-data.php',
                      dataType: 'json',
                       success: function(data){
                                console.log(data)
                                pic_data = data
                              }   

                    });
                   });


    jQuery(document).ready(function () {
        jQuery('#vmap_US').vectorMap({
          map: 'usa_en',
          backgroundColor: 'none',
          borderColor: 'black',
          enableZoom: false,
          showTooltip: true,
          selectedColor: null,
          hoverColor: null,
          colors: us_data,
          hoverColors: us_data_hov,
          color:'grey',
          onRegionClick: myFunction
        });
      });

function myFunction(element, code, region)
    {
      //alert(code.toLowerCase());
  		if(code.toUpperCase() in pic_data){
        document.getElementById("travel_location").innerHTML = region;
        document.getElementById("photo_scroll").innerHTML = "";
        for (i = 0; i < pic_data[code.toUpperCase()]; i++) {         
          var elem = document.createElement("img");
          elem.src = 'images/' + region.toLowerCase() +'/image-' +  i +'.jpg';       
          document.getElementById("photo_scroll").appendChild(elem);
        }
      }
      else if(code.toUpperCase() == 'US'){
        document.getElementById("bring_down").style.display = "block"
  		  document.getElementById("vmap_NA").style.marginTop = "-367px";
  		}

    }




function bringDown(element, code, region)
    {
   	  document.getElementById("bring_down").style.display = "none";
		  document.getElementById("vmap_NA").style.marginTop = "0";
    }

jQuery(document).ready(function () {
        jQuery('#vmap_NA').vectorMap({
          map: 'world_en',
          backgroundColor: 'none',
          borderColor: 'black',
          enableZoom: false,
          showTooltip: true,
          selectedColor: null,
          hoverColor: null,
          colors: world_data,
          hoverColors: world_data_hov,
          color:'#858585',
          onRegionClick: myFunction
        });
      });


