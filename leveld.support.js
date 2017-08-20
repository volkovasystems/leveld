"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "leveld",
              			"path": "leveld/leveld.js",
              			"file": "leveld.js",
              			"module": "leveld",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/leveld.git",
              			"test": "leveld-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Flatten arrays with level.
              
              		If level is not given, the default level is 2.
              
              		The default level is 2 because of certain scenarios,
              			- zero level means nothing can be flatten by any level.
              			- 1 levels means strip the first array wrapping
              				then wrap it again (like nothing happened).
              			- 2 levels means strip the outer array
              				and inner array wrapping and wrap it again.
              
              		If we don't have default level then this defeats the purpose of the function.
              
              		This will accept Infinity as level value to denote we will flatten all.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"decrease": "decrease",
              			"doubt": "doubt",
              			"falzy": "falzy",
              			"raze": "raze",
              		}
              	@end-include
              */

var arid = require("arid");
var decrease = require("decrease");
var doubt = require("doubt");
var falzy = require("falzy");
var raze = require("raze");

var leveld = function leveld(array, level) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"array:required": Array,
                                            			"level": "number"
                                            		}
                                            	@end-meta-configuration
                                            */

	if (!doubt(array, AS_ARRAY)) {
		throw new Error("invalid array");
	}

	if (falzy(level) || typeof level != "number") {
		level = 2;
	}

	if (arid(array)) {
		return array;
	}

	return decrease(array, function flatten(previous, current) {
		var element = undefined;

		if (isFinite(level) && level > 1 && doubt(current, AS_ARRAY)) {
			element = leveld(current, level - 1);

		} else if (!isFinite(level) && doubt(current, AS_ARRAY)) {
			element = leveld(current, level);

		} else if (doubt(current, AS_ARRAY)) {
			previous.push(current);

			return previous;

		} else {
			element = current;
		}

		return previous.concat(element);
	}, []);
};

module.exports = leveld;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiZGVjcmVhc2UiLCJkb3VidCIsImZhbHp5IiwicmF6ZSIsImxldmVsZCIsImFycmF5IiwibGV2ZWwiLCJBU19BUlJBWSIsIkVycm9yIiwiZmxhdHRlbiIsInByZXZpb3VzIiwiY3VycmVudCIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJpc0Zpbml0ZSIsInB1c2giLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFdBQVdELFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNSyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxLQUF4QixFQUErQjtBQUM3Qzs7Ozs7Ozs7O0FBU0EsS0FBSSxDQUFDTCxNQUFPSSxLQUFQLEVBQWNFLFFBQWQsQ0FBTCxFQUErQjtBQUM5QixRQUFNLElBQUlDLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJTixNQUFPSSxLQUFQLEtBQWtCLE9BQU9BLEtBQVAsSUFBZ0IsUUFBdEMsRUFBZ0Q7QUFDL0NBLFVBQVEsQ0FBUjtBQUNBOztBQUVELEtBQUlSLEtBQU1PLEtBQU4sQ0FBSixFQUFtQjtBQUNsQixTQUFPQSxLQUFQO0FBQ0E7O0FBRUQsUUFBT0wsU0FBVUssS0FBVixFQUFpQixTQUFTSSxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFDNUQsTUFBSUMsVUFBVUMsU0FBZDs7QUFFQSxNQUFJQyxTQUFVUixLQUFWLEtBQXFCQSxRQUFRLENBQTdCLElBQWtDTCxNQUFPVSxPQUFQLEVBQWdCSixRQUFoQixDQUF0QyxFQUFrRTtBQUNqRUssYUFBVVIsT0FBUU8sT0FBUixFQUFpQkwsUUFBUSxDQUF6QixDQUFWOztBQUVBLEdBSEQsTUFHTSxJQUFJLENBQUNRLFNBQVVSLEtBQVYsQ0FBRCxJQUFzQkwsTUFBT1UsT0FBUCxFQUFnQkosUUFBaEIsQ0FBMUIsRUFBc0Q7QUFDM0RLLGFBQVVSLE9BQVFPLE9BQVIsRUFBaUJMLEtBQWpCLENBQVY7O0FBRUEsR0FISyxNQUdBLElBQUlMLE1BQU9VLE9BQVAsRUFBZ0JKLFFBQWhCLENBQUosRUFBZ0M7QUFDckNHLFlBQVNLLElBQVQsQ0FBZUosT0FBZjs7QUFFQSxVQUFPRCxRQUFQOztBQUVBLEdBTEssTUFLRDtBQUNKRSxhQUFVRCxPQUFWO0FBQ0E7O0FBRUQsU0FBT0QsU0FBU00sTUFBVCxDQUFpQkosT0FBakIsQ0FBUDtBQUNBLEVBbkJNLEVBbUJKLEVBbkJJLENBQVA7QUFvQkEsQ0ExQ0Q7O0FBNENBSyxPQUFPQyxPQUFQLEdBQWlCZCxNQUFqQiIsImZpbGUiOiJsZXZlbGQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJsZXZlbGRcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibGV2ZWxkL2xldmVsZC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJsZXZlbGQuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJsZXZlbGRcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGV2ZWxkLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJsZXZlbGQtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRGbGF0dGVuIGFycmF5cyB3aXRoIGxldmVsLlxyXG5cclxuXHRcdElmIGxldmVsIGlzIG5vdCBnaXZlbiwgdGhlIGRlZmF1bHQgbGV2ZWwgaXMgMi5cclxuXHJcblx0XHRUaGUgZGVmYXVsdCBsZXZlbCBpcyAyIGJlY2F1c2Ugb2YgY2VydGFpbiBzY2VuYXJpb3MsXHJcblx0XHRcdC0gemVybyBsZXZlbCBtZWFucyBub3RoaW5nIGNhbiBiZSBmbGF0dGVuIGJ5IGFueSBsZXZlbC5cclxuXHRcdFx0LSAxIGxldmVscyBtZWFucyBzdHJpcCB0aGUgZmlyc3QgYXJyYXkgd3JhcHBpbmdcclxuXHRcdFx0XHR0aGVuIHdyYXAgaXQgYWdhaW4gKGxpa2Ugbm90aGluZyBoYXBwZW5lZCkuXHJcblx0XHRcdC0gMiBsZXZlbHMgbWVhbnMgc3RyaXAgdGhlIG91dGVyIGFycmF5XHJcblx0XHRcdFx0YW5kIGlubmVyIGFycmF5IHdyYXBwaW5nIGFuZCB3cmFwIGl0IGFnYWluLlxyXG5cclxuXHRcdElmIHdlIGRvbid0IGhhdmUgZGVmYXVsdCBsZXZlbCB0aGVuIHRoaXMgZGVmZWF0cyB0aGUgcHVycG9zZSBvZiB0aGUgZnVuY3Rpb24uXHJcblxyXG5cdFx0VGhpcyB3aWxsIGFjY2VwdCBJbmZpbml0eSBhcyBsZXZlbCB2YWx1ZSB0byBkZW5vdGUgd2Ugd2lsbCBmbGF0dGVuIGFsbC5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXHJcblx0XHRcdFwiZGVjcmVhc2VcIjogXCJkZWNyZWFzZVwiLFxyXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xyXG5jb25zdCBkZWNyZWFzZSA9IHJlcXVpcmUoIFwiZGVjcmVhc2VcIiApO1xyXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuXHJcbmNvbnN0IGxldmVsZCA9IGZ1bmN0aW9uIGxldmVsZCggYXJyYXksIGxldmVsICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBBcnJheSxcclxuXHRcdFx0XHRcImxldmVsXCI6IFwibnVtYmVyXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggIWRvdWJ0KCBhcnJheSwgQVNfQVJSQVkgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgYXJyYXlcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHp5KCBsZXZlbCApIHx8IHR5cGVvZiBsZXZlbCAhPSBcIm51bWJlclwiICl7XHJcblx0XHRsZXZlbCA9IDI7XHJcblx0fVxyXG5cclxuXHRpZiggYXJpZCggYXJyYXkgKSApe1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGRlY3JlYXNlKCBhcnJheSwgZnVuY3Rpb24gZmxhdHRlbiggcHJldmlvdXMsIGN1cnJlbnQgKXtcclxuXHRcdGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdGlmKCBpc0Zpbml0ZSggbGV2ZWwgKSAmJiBsZXZlbCA+IDEgJiYgZG91YnQoIGN1cnJlbnQsIEFTX0FSUkFZICkgKXtcclxuXHRcdFx0ZWxlbWVudCA9IGxldmVsZCggY3VycmVudCwgbGV2ZWwgLSAxICk7XHJcblxyXG5cdFx0fWVsc2UgaWYoICFpc0Zpbml0ZSggbGV2ZWwgKSAmJiBkb3VidCggY3VycmVudCwgQVNfQVJSQVkgKSApe1xyXG5cdFx0XHRlbGVtZW50ID0gbGV2ZWxkKCBjdXJyZW50LCBsZXZlbCApO1xyXG5cclxuXHRcdH1lbHNlIGlmKCBkb3VidCggY3VycmVudCwgQVNfQVJSQVkgKSApe1xyXG5cdFx0XHRwcmV2aW91cy5wdXNoKCBjdXJyZW50ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcHJldmlvdXM7XHJcblxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGVsZW1lbnQgPSBjdXJyZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwcmV2aW91cy5jb25jYXQoIGVsZW1lbnQgKTtcclxuXHR9LCBbIF0gKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbGV2ZWxkO1xyXG4iXX0=
//# sourceMappingURL=leveld.support.js.map
