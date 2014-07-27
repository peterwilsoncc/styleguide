/* global WebFont, PWCC_data */
/* jshint latedef: nofunc */

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

(function () {

if (typeof window.Element === "undefined" || "classList" in document.documentElement) {
	return;
}

var prototype = Array.prototype,
    push = prototype.push,
    splice = prototype.splice,
    join = prototype.join;

function DOMTokenList(el) {
  this.el = el;
  // The className needs to be trimmed and split on whitespace
  // to retrieve a list of classes.
  var classes = el.className.replace(/^\s+|\s+$/g,'').split(/\s+/);
  for (var i = 0; i < classes.length; i++) {
    push.call(this, classes[i]);
  }
}

DOMTokenList.prototype = {
  add: function(token) {
    if(this.contains(token)) {
		return;
	}
    push.call(this, token);
    this.el.className = this.toString();
  },
  contains: function(token) {
    return this.el.className.indexOf(token) !== -1;
  },
  item: function(index) {
    return this[index] || null;
  },
  remove: function(token) {
    if (!this.contains(token)) {
		return;
	}
    for (var i = 0; i < this.length; i++) {
      if (this[i] === token) {
		  break;
	  }
    }
    splice.call(this, i, 1);
    this.el.className = this.toString();
  },
  toString: function() {
    return join.call(this, ' ');
  },
  toggle: function(token) {
    if (!this.contains(token)) {
      this.add(token);
    } else {
      this.remove(token);
    }

    return this.contains(token);
  }
};

window.DOMTokenList = DOMTokenList;

function defineElementGetter (obj, prop, getter) {
    if (Object.defineProperty) {
        Object.defineProperty(obj, prop,{
            get : getter
        });
    } else {
        obj.__defineGetter__(prop, getter);
    }
}

defineElementGetter(Element.prototype, 'classList', function () {
  return new DOMTokenList(this);
});

})();

var PWCC = this.PWCC || {};
var console = this.console || {  // jshint ignore:line
	error: function(){},
	info: function(){},
	log: function(){},
	warn: function(){}
};

(PWCC.fns = function( window, document ){
	'use strict';
	
	if ( !document.querySelectorAll || !window.addEventListener ) {
		// you're not a very good browser
		return;
	}
	
	domReadyEvent(); // in footer, no need to wait
	
	function domReadyEvent() {
		commentForm();
	}
	
	function commentForm() {
		var $form = $( '#commentform' ),
			$inputs = $form[0].querySelectorAll( 'input,textarea' ),
			preChecked = false,
			i,l;
		
		$form[0].addEventListener( 'submit', eventValidateForm );
		for ( i=0,l=$inputs.length; i<l; i++ ) {
			$inputs[i].addEventListener( 'keyup', eventValidateInput );
		}
		
		function eventValidateForm( event ) {
			var formValid = validateCommentForm();
			if ( false === formValid ) {
				console.log( formValid );
				event.preventDefault();
			}
		}
		
		function eventValidateInput() {
			if ( false === preChecked ) {
				return;
			}
			validateCommentInput( this ); // jshint ignore:line
		}
		
		
		function validateCommentForm() {
			var formValid = true,
				$firstInvalid,
				i,l, 
				fieldValid;

			preChecked = true;
			
			for ( i=0,l=$inputs.length; i<l; i++ ) {
				fieldValid = validateCommentInput( $inputs[i] );
				if ( false === fieldValid ) {
					$firstInvalid = ( undefined === $firstInvalid ) ? $inputs[i] : $firstInvalid;
					$firstInvalid.focus();
					formValid = false;
				}
			}
			return formValid;
		}
		
		function validateCommentInput( $input ) {
			var //$label = $( 'label[for="' + $input.id + '"]' )[0],
				validator = function(){return true;},
				$inputSet = $input.parentNode;
			
			if ( 'url' === $input.getAttribute( 'type') ) {
				validator = validateWebsite;
			}
			else if ( 'email' === $input.getAttribute( 'type') ) {
				validator = validateEmail;
			}
			
			if ( ( '' === $input.value ) && ( "true" === $input.getAttribute( 'aria-required' ) ) ) {
				// invalid
				return isError();
			}
			else if ( false === validator( $input.value ) ) {
				// invalid
				return isError();
			}
			else {
				// valid
				return isValid();
			}
			
			function isError() {
				$inputSet.classList.add( 'is-error' );
				$inputSet.classList.remove( 'is-valid' );
				return false;
			}
			function isValid() {
				$inputSet.classList.remove( 'is-error' );
				$inputSet.classList.add( 'is-valid' );
				return true;
			}
		}
		
		
	}
	
	
	
	/* helper functions */
	function $( selector ) {  // jshint ignore:line
		return document.querySelectorAll( selector );
	}
	
	function validateEmail(email) {
		// http://stackoverflow.com/a/46181/11236
		
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return '' === email || re.test(email);
	}
	
	function validateWebsite(web) { 
  
	  var re = /^(?:(?:https?|ftp):\/\/){0,1}(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
	    return '' === web || re.test(web);
	}
	
}( this, document, undefined ));