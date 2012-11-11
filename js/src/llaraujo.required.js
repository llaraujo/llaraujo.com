/**
 * Escreve o logo. Centraliza o debug em um lugar para facilitar
 * na hora de subir para produÃ§Ã£o.
 */
function log(message) {
	var time = new Date();
	// /^(Request)/.test(message) && window.console && console.log('['+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+'] ' + message) || '';
	//window.console && console.log('['+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+'] ' + message) || '';
}

/**
 * Cria um objeto no window.
 * @param {String} name Nome do objeto
 */
function namespace(name) {
	var names  = name.split('.'),
		last   = window,
		object = '';

	for(var n in names) {
		object       = names[n];
		last[object] = last[object] || {};
		last         = last[object];
	}

	return last;
}

/**
 * Adiciona uma classe em um elemento
 */
function addClass(el, name) {
	if(el) {
		if( hasClass(el, name) == false ) {
			el.className += (el.className && " " || "") + name;
			return true;
		}
		return false;
	}
	return false;
}

/**
 * Adiciona uma classe em um elemento
 */
function hasClass(el, name) {
	if(el)
		return new RegExp(name).test(el.className);

	return false;
}

/**
 * Remove uma classe em um elemento
 */
function removeClass(el, name) {
	if(el) {
		if( hasClass(el, name) == true ) {
			el.className = el.className.replace(new RegExp(name), "").replace(/ +/g, ' ');
			return true;
		}
		return false;
	}
	return false;
}

/**
 * Faz a troca de uma classe para outra.
 * @param {Strong} names Deve seguir o padrÃ£o: "classe-que-vai-sair classe-que-vai-entrar"
 */
function toggleClass(el, names) {

	var name = names.split(" ");
	if(name.length == 2) {
		// remove a classe
		removeClass(el, name[0]);

		// adiciona a classe
		addClass(el, name[1]);
	}
	else if(name.length == 1) {
		if( removeClass(el, name) == false )
			addClass(el, name);
	}

	return true;
}

/**
 * Escreve um cookie
 */
function setCookie(nome,valor,duracao,domain){
	valor = escape(valor);
	var de = new Date();
	if(duracao)
		de.setDate(de.getDate() + duracao);
	document.cookie = nome + "=" + valor + (duracao?'; expires=' + de.toUTCString():'') + '; path=/; '+(domain ? 'domain='+domain : '');
}

function getCookie(nome){
	var re1 = new RegExp(nome+'=','g');
	var re2 = new RegExp('.*?'+nome+'=(.*?)(\;.*?$|$)','g');
	if (document.cookie.match(re1)) {
	  var value = document.cookie.replace(re2,'$1');
		return unescape(value);
  }
	else
		return null;
}
