$(document).foundation()




$(document).mouseup(function (e) {
  var container = $('#contact-panel');
  if (!container.is(e.target) // if the target of the click isn't the container...
  && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.removeClass('is-active');
    }
});


/*this is for doors opening*/
$(document).ready(function() {
	// Users can skip the loading process if they want.
	$('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})

	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 5000)
	});

	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, .body').addClass('loaded');
	}, 60000);
})
