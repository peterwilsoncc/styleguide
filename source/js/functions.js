/* global WebFont, PWCC_data */
(function(P, W, C, c) {
	var w = {
		google: {
			families: ['Lato:400,700,400italic,700italic:latin']
		},
		fontdeck: { id: '47046' },
		custom: {
			families: ['fontello'],
			testStrings: {
				'fontello': '\uE801\uE802\uE808'
			}
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
	b.src = '//ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont.js';
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

(function(document) {
	var site = PWCC_data.siteHome;
	var b = {
		"fonts": [{
			"font_family": "fontello",
			"font_size_adjust": "1",
			"font_urls": {
				"eot": site + "fonts/fontello.eot",
				"ttf": site + "fonts/fontello.ttf",
				"woff": site + "fonts/fontello.woff",
				"svg": site + "fonts/fontello.svg"
			},
			"weight": "normal",
			"style": "normal",
			"name": "fontello"
		}]
	};
	return {
		a: function() {
			for (var code = "", a = 0, f = b.fonts.length; a < f; ++a) {
				code += "@font-face {font-family:'" + b.fonts[a].name + "';";
				code += "src:url('" + b.fonts[a].font_urls.eot + "');";
				code += "src:url('" + b.fonts[a].font_urls.eot + "?')format('embedded-opentype'),";
				code += "url('" + b.fonts[a].font_urls.woff + "')format('woff'),";
				code += "url('" + b.fonts[a].font_urls.ttf + "')format('opentype'),";
				code += "url('" + b.fonts[a].font_urls.svg + "')format('svg');";
				code += "font-weight:" + b.fonts[a].weight + ";";
				code += "font-style:" + b.fonts[a].style + ";";
				code += "}";
			}
			a = document.createElement("style");
			a.type = "text/css";
			document.getElementsByTagName("head")[0].appendChild(a);
			if ( a.styleSheet ) {
				a.styleSheet.cssText = code;
			}
			else {
				a.innerHTML = code;
			}
		}
	};
})(document).a();
