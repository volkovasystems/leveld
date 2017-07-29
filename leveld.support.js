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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiZGVjcmVhc2UiLCJkb3VidCIsImZhbHp5IiwicmF6ZSIsImxldmVsZCIsImFycmF5IiwibGV2ZWwiLCJBU19BUlJBWSIsIkVycm9yIiwiZmxhdHRlbiIsInByZXZpb3VzIiwiY3VycmVudCIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJpc0Zpbml0ZSIsInB1c2giLCJjb25jYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFdBQVdELFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNSyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxLQUF4QixFQUErQjtBQUM3Qzs7Ozs7Ozs7O0FBU0EsS0FBSSxDQUFDTCxNQUFPSSxLQUFQLEVBQWNFLFFBQWQsQ0FBTCxFQUErQjtBQUM5QixRQUFNLElBQUlDLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJTixNQUFPSSxLQUFQLEtBQWtCLE9BQU9BLEtBQVAsSUFBZ0IsUUFBdEMsRUFBZ0Q7QUFDL0NBLFVBQVEsQ0FBUjtBQUNBOztBQUVELEtBQUlSLEtBQU1PLEtBQU4sQ0FBSixFQUFtQjtBQUNsQixTQUFPQSxLQUFQO0FBQ0E7O0FBRUQsUUFBT0wsU0FBVUssS0FBVixFQUFpQixTQUFTSSxPQUFULENBQWtCQyxRQUFsQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFDNUQsTUFBSUMsVUFBVUMsU0FBZDs7QUFFQSxNQUFJQyxTQUFVUixLQUFWLEtBQXFCQSxRQUFRLENBQTdCLElBQWtDTCxNQUFPVSxPQUFQLEVBQWdCSixRQUFoQixDQUF0QyxFQUFrRTtBQUNqRUssYUFBVVIsT0FBUU8sT0FBUixFQUFpQkwsUUFBUSxDQUF6QixDQUFWOztBQUVBLEdBSEQsTUFHTSxJQUFJLENBQUNRLFNBQVVSLEtBQVYsQ0FBRCxJQUFzQkwsTUFBT1UsT0FBUCxFQUFnQkosUUFBaEIsQ0FBMUIsRUFBc0Q7QUFDM0RLLGFBQVVSLE9BQVFPLE9BQVIsRUFBaUJMLEtBQWpCLENBQVY7O0FBRUEsR0FISyxNQUdBLElBQUlMLE1BQU9VLE9BQVAsRUFBZ0JKLFFBQWhCLENBQUosRUFBZ0M7QUFDckNHLFlBQVNLLElBQVQsQ0FBZUosT0FBZjs7QUFFQSxVQUFPRCxRQUFQOztBQUVBLEdBTEssTUFLRDtBQUNKRSxhQUFVRCxPQUFWO0FBQ0E7O0FBRUQsU0FBT0QsU0FBU00sTUFBVCxDQUFpQkosT0FBakIsQ0FBUDtBQUNBLEVBbkJNLEVBbUJKLEVBbkJJLENBQVA7QUFvQkEsQ0ExQ0Q7O0FBNENBSyxPQUFPQyxPQUFQLEdBQWlCZCxNQUFqQiIsImZpbGUiOiJsZXZlbGQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV2ZWxkXCIsXG5cdFx0XHRcInBhdGhcIjogXCJsZXZlbGQvbGV2ZWxkLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJsZXZlbGQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGV2ZWxkXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXZlbGQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJsZXZlbGQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRGbGF0dGVuIGFycmF5cyB3aXRoIGxldmVsLlxuXG5cdFx0SWYgbGV2ZWwgaXMgbm90IGdpdmVuLCB0aGUgZGVmYXVsdCBsZXZlbCBpcyAyLlxuXG5cdFx0VGhlIGRlZmF1bHQgbGV2ZWwgaXMgMiBiZWNhdXNlIG9mIGNlcnRhaW4gc2NlbmFyaW9zLFxuXHRcdFx0LSB6ZXJvIGxldmVsIG1lYW5zIG5vdGhpbmcgY2FuIGJlIGZsYXR0ZW4gYnkgYW55IGxldmVsLlxuXHRcdFx0LSAxIGxldmVscyBtZWFucyBzdHJpcCB0aGUgZmlyc3QgYXJyYXkgd3JhcHBpbmdcblx0XHRcdFx0dGhlbiB3cmFwIGl0IGFnYWluIChsaWtlIG5vdGhpbmcgaGFwcGVuZWQpLlxuXHRcdFx0LSAyIGxldmVscyBtZWFucyBzdHJpcCB0aGUgb3V0ZXIgYXJyYXlcblx0XHRcdFx0YW5kIGlubmVyIGFycmF5IHdyYXBwaW5nIGFuZCB3cmFwIGl0IGFnYWluLlxuXG5cdFx0SWYgd2UgZG9uJ3QgaGF2ZSBkZWZhdWx0IGxldmVsIHRoZW4gdGhpcyBkZWZlYXRzIHRoZSBwdXJwb3NlIG9mIHRoZSBmdW5jdGlvbi5cblxuXHRcdFRoaXMgd2lsbCBhY2NlcHQgSW5maW5pdHkgYXMgbGV2ZWwgdmFsdWUgdG8gZGVub3RlIHdlIHdpbGwgZmxhdHRlbiBhbGwuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImRlY3JlYXNlXCI6IFwiZGVjcmVhc2VcIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgZGVjcmVhc2UgPSByZXF1aXJlKCBcImRlY3JlYXNlXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5cbmNvbnN0IGxldmVsZCA9IGZ1bmN0aW9uIGxldmVsZCggYXJyYXksIGxldmVsICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogQXJyYXksXG5cdFx0XHRcdFwibGV2ZWxcIjogXCJudW1iZXJcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFkb3VidCggYXJyYXksIEFTX0FSUkFZICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIGxldmVsICkgfHwgdHlwZW9mIGxldmVsICE9IFwibnVtYmVyXCIgKXtcblx0XHRsZXZlbCA9IDI7XG5cdH1cblxuXHRpZiggYXJpZCggYXJyYXkgKSApe1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cdHJldHVybiBkZWNyZWFzZSggYXJyYXksIGZ1bmN0aW9uIGZsYXR0ZW4oIHByZXZpb3VzLCBjdXJyZW50ICl7XG5cdFx0bGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cblx0XHRpZiggaXNGaW5pdGUoIGxldmVsICkgJiYgbGV2ZWwgPiAxICYmIGRvdWJ0KCBjdXJyZW50LCBBU19BUlJBWSApICl7XG5cdFx0XHRlbGVtZW50ID0gbGV2ZWxkKCBjdXJyZW50LCBsZXZlbCAtIDEgKTtcblxuXHRcdH1lbHNlIGlmKCAhaXNGaW5pdGUoIGxldmVsICkgJiYgZG91YnQoIGN1cnJlbnQsIEFTX0FSUkFZICkgKXtcblx0XHRcdGVsZW1lbnQgPSBsZXZlbGQoIGN1cnJlbnQsIGxldmVsICk7XG5cblx0XHR9ZWxzZSBpZiggZG91YnQoIGN1cnJlbnQsIEFTX0FSUkFZICkgKXtcblx0XHRcdHByZXZpb3VzLnB1c2goIGN1cnJlbnQgKTtcblxuXHRcdFx0cmV0dXJuIHByZXZpb3VzO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRlbGVtZW50ID0gY3VycmVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJldmlvdXMuY29uY2F0KCBlbGVtZW50ICk7XG5cdH0sIFsgXSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXZlbGQ7XG4iXX0=
//# sourceMappingURL=leveld.support.js.map
