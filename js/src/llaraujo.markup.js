(function() {

	// cria namespace
	var llaraujo = namespace("llaraujo"),
		Markup      = namespace("llaraujo.Markup"),
		Callback    = namespace("llaraujo.Callback");

	Markup.init = function(){
		removeClass(Sizzle('header')[0], 'start');
		Markup.links();
		Markup.contacts();
		Markup.logos();

		setTimeout(function(){
			window.scrollTo(0, 1);
		},500);
	};

	Markup.links = function(){

		if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {

			console.log('entrou');

			$$('.cont a').on('click',function(e){
				console.log(this);
				e.preventDefault();
			});

			$$('.cont a').doubleTap(function(e){
				window.location.href = $$('.cont a').attr('href');
			});

		}

	};

	Markup.contacts = function(){

		var elems = Sizzle('nav li a');

		setTimeout(function(){removeClass(Sizzle('nav li a')[0], 'hide');},2000);
		setTimeout(function(){removeClass(Sizzle('nav li a')[1], 'hide');},2250);
		setTimeout(function(){removeClass(Sizzle('nav li a')[2], 'hide');},2450);
		setTimeout(function(){removeClass(Sizzle('nav li a')[3], 'hide');},2650);
		setTimeout(function(){removeClass(Sizzle('nav li a')[4], 'hide');},2850);

	};

	Markup.logos = function(){
		setTimeout(function(){removeClass(Sizzle('.logos')[0], 'hide');},200);
	};


})();