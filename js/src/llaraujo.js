(function(){

	llaraujo = window.llaraujo || {};

	// cria namespace
	var EleicoesUOL = namespace("llaraujo"),
		Request     = namespace("llaraujo.Request"),
		Callback    = namespace("llaraujo.Callback"),
		Markup      = namespace("llaraujo.Markup");

	llaraujo.init = function(){
		log('init');
		llaraujo.appCache();
		llaraujo.checkTouch();
		Markup.init();
	};
	
	llaraujo.appCache = function(){
		
		window.addEventListener('load', function(e) {

			window.applicationCache.addEventListener('updateready', function(e) {
				if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
					window.applicationCache.swapCache();
					window.location.reload();
				}
			}, false);

		}, false);

	};

	llaraujo.checkTouch = function(){
		
		if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			addClass(Sizzle('html')[0], 'touch');
		} else {
			addClass(Sizzle('html')[0], 'no-touch');
		}

	};
	
})();

window.addEventListener('load', llaraujo.init, false);