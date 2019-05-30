// console.log(); everything and get the button working


// append
// set interval *
// first
// last
// remove
// addClass
// removeClass
// css
// settimeout

function slider() {

		var images = $('.slide');

		for(var i=0; i < images.length; i++) {
			images[i].( ".slide" ).addClass( "overflow: hidden;" );
		}

		$('#next').click(function() {
      myKey+2;
    	slider();
    })

		$('#previous').click(function() {
		myKey-2;
		slider();
  })

		myKey++;
		if(myKey > images.length) {
			myKey = 1;
		}

		images[myKey-1].style.display = "block";

		setInterval(slider,10000);
	}

	var myKey = 0;


	slider();
