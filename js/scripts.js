(function () {

	if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		$('html').addClass('touch');
	} else {
		$('html').addClass('no-touch');
	}

	var datauri = new Image();

	datauri.onload = function() {
		$('html').addClass('datauri');
	};

	datauri.onerror = function() {
		$('html').addClass('no-datauri');
	};  

	datauri.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

}());

(function () {

	if( $('html').hasClass('touch') ){

		var n = $('nav a');

		// click
		n.on('click',function(e){
			e.preventDefault();
		});

		// doubleTap
		n.doubleTap(function(e){
			window.location.href = $(this).attr('href');
		});

	}
	
	if( $('html').hasClass('no-datauri') ){
		$('head').append('<link rel="stylesheet" type="text/css" href="http://llaraujo.com/css/images-no-datauri.css">');
	}else{
		$('head').append('<link rel="stylesheet" type="text/css" href="http://llaraujo.com/css/images-datauri.css">');
	}

}());