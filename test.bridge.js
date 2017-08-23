"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "leveld",
              			"path": "leveld/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/leveld.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"leveld": "leveld"
              		}
              	@end-include
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge





//: @bridge:

describe("leveld", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`leveld( [ [ [ 1 ] ] ], 2 )`", function () {
		it("should be equal to [ [ 1 ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [ [ [ 1 ] ] ], 2 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ [ 1 ] ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [ [ [ 1 ] ] ], 3 )`", function () {
		it("should be equal to [ 1 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [ [ [ 1 ] ] ], 3 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ 1 ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 2 )`", function () {
		it("should be equal to [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 2 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 3 )`", function () {
		it("should be equal to [ [ 1, 2, 3 ], [ [ [ 4,5,6 ] ] ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 3 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ [ 1, 2, 3 ], [ [ [ 4,5,6 ] ] ] ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 4 )`", function () {
		it("should be equal to [ 1, 2, 3, [ [ 4, 5, 6 ] ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 4 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ 1, 2, 3, [ [ 4, 5, 6 ] ] ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 5 )`", function () {
		it("should be equal to [ 1, 2, 3, [ 4, 5, 6 ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 5 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ 1, 2, 3, [ 4, 5, 6 ] ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 6 )`", function () {
		it("should be equal to [ 1, 2, 3, 4, 5, 6 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 6 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ 1, 2, 3, 4, 5, 6 ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 7 )`", function () {
		it("should be equal to [ 1, 2, 3, 4, 5, 6 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 7 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ 1, 2, 3, 4, 5, 6 ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[[1,2,3],[[[4,5,6]]]]]] )`", function () {
		it("should be equal to [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[[1,2,3],[[[4,5,6]]]]]] ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[[1,2,3],[[[4,5,6]]]]]], Infinity )`", function () {
		it("should be equal to [ 1, 2, 3, 4, 5, 6 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[[1,2,3],[[[4,5,6]]]]]], Infinity ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ 1, 2, 3, 4, 5, 6 ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[1,2,3],[3,4,5]], 2 )`", function () {
		it("should be equal to [ 1, 2, 3, 3, 4, 5 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[1,2,3],[3,4,5]], 2 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ 1, 2, 3, 3, 4, 5 ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[[1,2,3],[3,4,5]],[4,5,6]], 2 )`", function () {
		it("should be equal to [ [ 1, 2, 3 ], [ 3, 4, 5 ], 4, 5, 6 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[[1,2,3],[3,4,5]],[4,5,6]], 2 ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ [ 1, 2, 3 ], [ 3, 4, 5 ], 4, 5, 6 ] );
   			//: @end-ignore
		});
	});

	describe("`leveld( [[1,2,3],[3,4,5]] )`", function () {
		it("should be equal to [ 1, 2, 3, 3, 4, 5 ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute( ( ) => JSON.stringify( leveld( [[1,2,3],[3,4,5]] ) ) );
   			assert.deepEqual( JSON.parse( result.value ), [ 1, 2, 3, 3, 4, 5 ] );
   			//: @end-ignore
		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7OztBQU1BOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREksS0FBSSw4QkFBSixFQUFvQyxZQUFPO0FBQzFDO0FBQ0g7Ozs7QUFJQTtBQUNHLEdBUEQ7QUFRQSxFQVREOztBQVdBSixVQUFVLDhCQUFWLEVBQTBDLFlBQU87QUFDaERJLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QztBQUNIOzs7O0FBSUE7QUFDRyxHQVBEO0FBUUEsRUFURDs7QUFXQUosVUFBVSwwQ0FBVixFQUFzRCxZQUFPO0FBQzVESSxLQUFJLDREQUFKLEVBQWtFLFlBQU87QUFDeEU7QUFDSDs7OztBQUlBO0FBQ0csR0FQRDtBQVFBLEVBVEQ7O0FBV0FKLFVBQVUsMENBQVYsRUFBc0QsWUFBTztBQUM1REksS0FBSSx1REFBSixFQUE2RCxZQUFPO0FBQ25FO0FBQ0g7Ozs7QUFJQTtBQUNHLEdBUEQ7QUFRQSxFQVREOztBQVdBSixVQUFVLDBDQUFWLEVBQXNELFlBQU87QUFDNURJLEtBQUksaURBQUosRUFBdUQsWUFBTztBQUM3RDtBQUNIOzs7O0FBSUE7QUFDRyxHQVBEO0FBUUEsRUFURDs7QUFXQUosVUFBVSwwQ0FBVixFQUFzRCxZQUFPO0FBQzVESSxLQUFJLDZDQUFKLEVBQW1ELFlBQU87QUFDekQ7QUFDSDs7OztBQUlBO0FBQ0csR0FQRDtBQVFBLEVBVEQ7O0FBV0FKLFVBQVUsMENBQVYsRUFBc0QsWUFBTztBQUM1REksS0FBSSx5Q0FBSixFQUErQyxZQUFPO0FBQ3JEO0FBQ0g7Ozs7QUFJQTtBQUNHLEdBUEQ7QUFRQSxFQVREOztBQVdBSixVQUFVLDBDQUFWLEVBQXNELFlBQU87QUFDNURJLEtBQUkseUNBQUosRUFBK0MsWUFBTztBQUNyRDtBQUNIOzs7O0FBSUE7QUFDRyxHQVBEO0FBUUEsRUFURDs7QUFXQUosVUFBVSx1Q0FBVixFQUFtRCxZQUFPO0FBQ3pESSxLQUFJLDREQUFKLEVBQWtFLFlBQU87QUFDeEU7QUFDSDs7OztBQUlBO0FBQ0csR0FQRDtBQVFBLEVBVEQ7O0FBV0FKLFVBQVUsaURBQVYsRUFBNkQsWUFBTztBQUNuRUksS0FBSSx5Q0FBSixFQUErQyxZQUFPO0FBQ3JEO0FBQ0g7Ozs7QUFJQTtBQUNHLEdBUEQ7QUFRQSxFQVREOztBQVdBSixVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERJLEtBQUkseUNBQUosRUFBK0MsWUFBTztBQUNyRDtBQUNIOzs7O0FBSUE7QUFDRyxHQVBEO0FBUUEsRUFURDs7QUFXQUosVUFBVSw0Q0FBVixFQUF3RCxZQUFPO0FBQzlESSxLQUFJLDBEQUFKLEVBQWdFLFlBQU87QUFDdEU7QUFDSDs7OztBQUlBO0FBQ0csR0FQRDtBQVFBLEVBVEQ7O0FBV0FKLFVBQVUsK0JBQVYsRUFBMkMsWUFBTztBQUNqREksS0FBSSx5Q0FBSixFQUErQyxZQUFPO0FBQ3JEO0FBQ0g7Ozs7QUFJQTtBQUNHLEdBUEQ7QUFRQSxFQVREOztBQVdBLENBbkpEOztBQXFKQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV2ZWxkXCIsXG5cdFx0XHRcInBhdGhcIjogXCJsZXZlbGQvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xldmVsZC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwibGV2ZWxkXCI6IFwibGV2ZWxkXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwibGV2ZWxkXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBsZXZlbGQoIFsgWyBbIDEgXSBdIF0sIDIgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBbIDEgXSBdXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBKU09OLnN0cmluZ2lmeSggbGV2ZWxkKCBbIFsgWyAxIF0gXSBdLCAyICkgKSApO1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0LnZhbHVlICksIFsgWyAxIF0gXSApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBsZXZlbGQoIFsgWyBbIDEgXSBdIF0sIDMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IEpTT04uc3RyaW5naWZ5KCBsZXZlbGQoIFsgWyBbIDEgXSBdIF0sIDMgKSApICk7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQudmFsdWUgKSwgWyAxIF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbGV2ZWxkKCBbW1tbMSwyLDNdLFtbWzQsNSw2XV1dXV1dLCAyIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgWyBbIDEsIDIsIDMgXSxbIFsgWyA0LCA1LCA2IF0gXSBdIF0gXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gSlNPTi5zdHJpbmdpZnkoIGxldmVsZCggW1tbWzEsMiwzXSxbW1s0LDUsNl1dXV1dXSwgMiApICkgKTtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdC52YWx1ZSApLCBbIFsgWyAxLCAyLCAzIF0sWyBbIFsgNCwgNSwgNiBdIF0gXSBdIF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbGV2ZWxkKCBbW1tbMSwyLDNdLFtbWzQsNSw2XV1dXV1dLCAzIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgWyAxLCAyLCAzIF0sIFsgWyBbIDQsNSw2IF0gXSBdIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IEpTT04uc3RyaW5naWZ5KCBsZXZlbGQoIFtbW1sxLDIsM10sW1tbNCw1LDZdXV1dXV0sIDMgKSApICk7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQudmFsdWUgKSwgWyBbIDEsIDIsIDMgXSwgWyBbIFsgNCw1LDYgXSBdIF0gXSApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBsZXZlbGQoIFtbW1sxLDIsM10sW1tbNCw1LDZdXV1dXV0sIDQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzLCBbIFsgNCwgNSwgNiBdIF0gXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gSlNPTi5zdHJpbmdpZnkoIGxldmVsZCggW1tbWzEsMiwzXSxbW1s0LDUsNl1dXV1dXSwgNCApICkgKTtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdC52YWx1ZSApLCBbIDEsIDIsIDMsIFsgWyA0LCA1LCA2IF0gXSBdICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxldmVsZCggW1tbWzEsMiwzXSxbW1s0LDUsNl1dXV1dXSwgNSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMsIFsgNCwgNSwgNiBdIF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IEpTT04uc3RyaW5naWZ5KCBsZXZlbGQoIFtbW1sxLDIsM10sW1tbNCw1LDZdXV1dXV0sIDUgKSApICk7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQudmFsdWUgKSwgWyAxLCAyLCAzLCBbIDQsIDUsIDYgXSBdICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGxldmVsZCggW1tbWzEsMiwzXSxbW1s0LDUsNl1dXV1dXSwgNiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMsIDQsIDUsIDYgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gSlNPTi5zdHJpbmdpZnkoIGxldmVsZCggW1tbWzEsMiwzXSxbW1s0LDUsNl1dXV1dXSwgNiApICkgKTtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdC52YWx1ZSApLCBbIDEsIDIsIDMsIDQsIDUsIDYgXSApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBsZXZlbGQoIFtbW1sxLDIsM10sW1tbNCw1LDZdXV1dXV0sIDcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAxLCAyLCAzLCA0LCA1LCA2IF1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IEpTT04uc3RyaW5naWZ5KCBsZXZlbGQoIFtbW1sxLDIsM10sW1tbNCw1LDZdXV1dXV0sIDcgKSApICk7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQudmFsdWUgKSwgWyAxLCAyLCAzLCA0LCA1LCA2IF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbGV2ZWxkKCBbW1tbMSwyLDNdLFtbWzQsNSw2XV1dXV1dIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgWyBbIDEsIDIsIDMgXSxbIFsgWyA0LCA1LCA2IF0gXSBdIF0gXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gSlNPTi5zdHJpbmdpZnkoIGxldmVsZCggW1tbWzEsMiwzXSxbW1s0LDUsNl1dXV1dXSApICkgKTtcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEpTT04ucGFyc2UoIHJlc3VsdC52YWx1ZSApLCBbIFsgWyAxLCAyLCAzIF0sWyBbIFsgNCwgNSwgNiBdIF0gXSBdIF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbGV2ZWxkKCBbW1tbMSwyLDNdLFtbWzQsNSw2XV1dXV1dLCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMsIDQsIDUsIDYgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gSlNPTi5zdHJpbmdpZnkoIGxldmVsZCggW1tbWzEsMiwzXSxbW1s0LDUsNl1dXV1dXSwgSW5maW5pdHkgKSApICk7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQudmFsdWUgKSwgWyAxLCAyLCAzLCA0LCA1LCA2IF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbGV2ZWxkKCBbWzEsMiwzXSxbMyw0LDVdXSwgMiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMsIDMsIDQsIDUgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gSlNPTi5zdHJpbmdpZnkoIGxldmVsZCggW1sxLDIsM10sWzMsNCw1XV0sIDIgKSApICk7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQudmFsdWUgKSwgWyAxLCAyLCAzLCAzLCA0LCA1IF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbGV2ZWxkKCBbW1sxLDIsM10sWzMsNCw1XV0sWzQsNSw2XV0sIDIgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyBbIDEsIDIsIDMgXSwgWyAzLCA0LCA1IF0sIDQsIDUsIDYgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gSlNPTi5zdHJpbmdpZnkoIGxldmVsZCggW1tbMSwyLDNdLFszLDQsNV1dLFs0LDUsNl1dLCAyICkgKSApO1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0LnZhbHVlICksIFsgWyAxLCAyLCAzIF0sIFsgMywgNCwgNSBdLCA0LCA1LCA2IF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbGV2ZWxkKCBbWzEsMiwzXSxbMyw0LDVdXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEsIDIsIDMsIDMsIDQsIDUgXVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gSlNPTi5zdHJpbmdpZnkoIGxldmVsZCggW1sxLDIsM10sWzMsNCw1XV0gKSApICk7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBKU09OLnBhcnNlKCByZXN1bHQudmFsdWUgKSwgWyAxLCAyLCAzLCAzLCA0LCA1IF0gKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
