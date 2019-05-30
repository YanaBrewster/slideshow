
$(document).ready(function(){

	var slideContainer = $('.slideContainer');
	setInterval(function(){

			slideContainer.addClass('transition').css('transform', 'translateX(-1000px)');

			setTimeout(function(){
					var firstSlide = $('.slide').first();
					slideContainer.append(firstSlide);
					slideContainer.removeClass('transition').css('transform', 'translateX(0)');
			}, 700)
	}, 6000)


	$('#next').click(function(){
			var firstSlide = $('.slide').first();
			var slideContainer = $('.slideContainer');
			slideContainer.append(firstSlide);
	});

	$('#previous').click(function(){
			var lastSlide = $('.slide').last();
			var slideContainer = $('.slideContainer');
			slideContainer.prepend(lastSlide);
	});


});
