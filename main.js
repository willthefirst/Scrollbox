var WARBY = {
	
	init: function() {
		WARBY.poll();
	},

	poll: function() {
		var old = 0;

		// Polling is for less CPU load.
		setInterval(function() {

		var current = $(window).scrollTop();

			if (current !== old) {
				WARBY.resize(current);
				old = current;
			}

		}, 250);
	},

	resize: function(scroll) {
		var $lightbox = $('.lightbox');
		var window_height = $(window).height();

		//Calculates 1/3 width for lightbox given a changeable window size.
		var percent_scroll = (scroll/(2000-window_height));
		var new_width = 800 - percent_scroll*(2*800/3);

		$lightbox.width(new_width);
	}
};

$(document).ready(WARBY.init);