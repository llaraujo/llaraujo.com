(function() {

	// cria namespace
	var llaraujo 	= namespace("llaraujo"),
		Config      = namespace("llaraujo.Config"),
		Request     = namespace("llaraujo.Request"),
		Callback    = namespace("llaraujo.Callback"),
		Markup      = namespace("llaraujo.Markup");

	Callback.contacts = function(json){

		log( 'Callback.request()');

		Markup.contacts(json);

	}

})();