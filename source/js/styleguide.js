var PWCCsg = this.PWCCsg || {};

(PWCCsg.exe = function( window, document, undefined ){
	if ( !document.querySelectorAll ) {
		return;
	}
	
	var swatches,
		i,l;
	
	function getStyle(el,cssProperty){
		if (window.getComputedStyle !== 'undefined'){
			return window.getComputedStyle(el,null).getPropertyValue(cssProperty); 
		}
		else{
			return el.currentStyle[cssProperty];
		}
	}
	
	function rgbToHex(color) {
	    if (color.substr(0, 1) === "#") {
	        return color;
	    }
	    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
	        r = parseInt(nums[2], 10).toString(16),
	        g = parseInt(nums[3], 10).toString(16),
	        b = parseInt(nums[4], 10).toString(16);
	    return "#"+ (
	        (r.length == 1 ? "0"+ r : r) +
	        (g.length == 1 ? "0"+ g : g) +
	        (b.length == 1 ? "0"+ b : b)
	    );
	}
	
		
	swatches = document.querySelectorAll( '.sg-swatch' );
	for ( i=0, l=swatches.length; i<l; i++ ) {
		var swatch = swatches[i];
		var color = getStyle( swatch, 'background-color' );
		var label = swatch.nextElementSibling;
		label.innerHTML = rgbToHex(color);
		swatch.className += ' is-labeled';
	}
}( this, document ));