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

//# sourceMappingURL=leveld.support.js.map