/* global WebFont */
(function(P, W, C, c) {
	var w = {
		google: {
			families: ['Lato:400,700,400italic,700italic:latin', 'Source+Code+Pro::latin']
		},
		timeout: 3000
	},
		e = P.documentElement,
		b = P.createElement(W),
		f = false,
		o = P.getElementsByTagName(W)[0],
		n, T = setTimeout(function() {
			e[C] = e[C].replace(/\bwf-loading\b/g, "") + c + "inactive";
		}, w.timeout);
	e[C] += c + "loading";
	b.src = '//ajax.googleapis.com/ajax/libs/webfont/1.5.2/webfont.js';
	b.onload = b.onreadystatechange = function() {
		n = this.readyState;
		if (f || n && n !== "complete" && n !== "loaded") {return;}
		f = true;
		clearTimeout(T);
		try {
			WebFont.load(w);
		} catch (x) {}
	};
	o.parentNode.insertBefore(b, o);
})(document, 'script', 'className', ' wf-');
