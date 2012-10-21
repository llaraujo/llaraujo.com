/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-github' : '&#x21;',
			'icon-facebook' : '&#x23;',
			'icon-twitter' : '&#x24;',
			'icon-feed' : '&#x25;',
			'icon-gplus' : '&#x26;',
			'icon-mail' : '&#x27;',
			'icon-html5' : '&#x28;',
			'icon-css3' : '&#x29;',
			'icon-chrome' : '&#x2a;',
			'icon-firefox' : '&#x2b;',
			'icon-IE' : '&#x2c;',
			'icon-opera' : '&#x2d;',
			'icon-safari' : '&#x2e;',
			'icon-file-pdf' : '&#x30;',
			'icon-file-word' : '&#x31;',
			'icon-skype' : '&#x32;',
			'icon-android' : '&#x33;',
			'icon-apple' : '&#x34;',
			'icon-phone' : '&#x35;',
			'icon-location' : '&#x22;',
			'icon-linkedin' : '&#x2f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};