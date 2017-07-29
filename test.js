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

const assert = require( "should" );

//: @server:
const leveld = require( "./leveld.js" );
//: @end-server





//: @server:

describe( "leveld", ( ) => {

	describe( "`leveld( [ [ [ 1 ] ] ], 2 )`", ( ) => {
		it( "should be equal to [ [ 1 ] ]", ( ) => {
			assert.deepEqual( leveld( [ [ [ 1 ] ] ], 2 ), [ [ 1 ] ] );
		} );
	} );

	describe( "`leveld( [ [ [ 1 ] ] ], 3 )`", ( ) => {
		it( "should be equal to [ 1 ]", ( ) => {
			assert.deepEqual( leveld( [ [ [ 1 ] ] ], 3 ), [ 1 ] );
		} );
	} );

	describe( "`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 2 )`", ( ) => {
		it( "should return [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ]", ( ) => {

			assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 2 ),
			[ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ] );

		} );
	} );

	describe( "`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 3 )`", ( ) => {
		it( "should return [ [ 1, 2, 3 ], [ [ [ 4,5,6 ] ] ] ]", ( ) => {

			assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 3 ),
			[ [ 1, 2, 3 ], [ [ [ 4,5,6 ] ] ] ] );

		} );
	} );

	describe( "`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 4 )`", ( ) => {
		it( "should return [ 1, 2, 3, [ [ 4, 5, 6 ] ] ]", ( ) => {

			assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 4 ),
			[ 1, 2, 3, [ [ 4, 5, 6 ] ] ] );

		} );
	} );

	describe( "`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 5 )`", ( ) => {
		it( "should return [ 1, 2, 3, [ 4, 5, 6 ] ]", ( ) => {

			assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 5 ),
			[ 1, 2, 3, [ 4, 5, 6 ] ] );

		} );
	} );

	describe( "`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 6 )`", ( ) => {
		it( "should return [ 1, 2, 3, 4, 5, 6 ]", ( ) => {

			assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 6 ),
			[ 1, 2, 3, 4, 5, 6 ] );

		} );
	} );

	describe( "`leveld( [[[[1,2,3],[[[4,5,6]]]]]], 7 )`", ( ) => {
		it( "should return [ 1, 2, 3, 4, 5, 6 ]", ( ) => {
			assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 7 ),
			[ 1, 2, 3, 4, 5, 6 ] );
		} );
	} );

	describe( "`leveld( [[[[1,2,3],[[[4,5,6]]]]]] )`", ( ) => {
		it( "should return [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ]", ( ) => {

			assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]] ),
			[ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ] );

		} );
	} );

	describe( "`leveld( [[[[1,2,3],[[[4,5,6]]]]]], Infinity )`", ( ) => {
		it( "should return [ 1, 2, 3, 4, 5, 6 ]", ( ) => {

			assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], Infinity ),
			[ 1, 2, 3, 4, 5, 6 ] );

		} );
	} );

	describe( "`leveld( [[1,2,3],[3,4,5]], 2 )`", ( ) => {
		it( "should return [ 1, 2, 3, 3, 4, 5 ]", ( ) => {

			assert.deepEqual( leveld( [[1,2,3],[3,4,5]], 2 ),
			[ 1, 2, 3, 3, 4, 5 ] );

		} );
	} );

	describe( "`leveld( [[[1,2,3],[3,4,5]],[4,5,6]], 2 )`", ( ) => {
		it( "should return [ [ 1, 2, 3 ], [ 3, 4, 5 ], 4, 5, 6 ]", ( ) => {

			assert.deepEqual( leveld( [[[1,2,3],[3,4,5]],[4,5,6]], 2 ),
			[ [ 1, 2, 3 ], [ 3, 4, 5 ], 4, 5, 6 ] );

		} );
	} );

	describe( "`leveld( [[1,2,3],[3,4,5]] )`", ( ) => {
		it( "should return [ 1, 2, 3, 3, 4, 5 ]", ( ) => {

			assert.deepEqual( leveld( [[1,2,3],[3,4,5]] ),
			[ 1, 2, 3, 3, 4, 5 ] );

		} );
	} );

} );

//: @end-server




