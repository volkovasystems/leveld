const assert = require( "assert" );
const leveld = require( "./leveld.js" );

assert.deepEqual( leveld( [ [ [ 1 ] ] ], 2 ), [ [ 1 ] ], "should return [ [ 1 ] ]" );

assert.deepEqual( leveld( [ [ [ 1 ] ] ], 3 ), [ 1 ], "should return [ 1 ]" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 2 ),
	[ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ],
	"should return [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ]" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 3 ),
	[ [ 1, 2, 3 ], [ [ [ 4,5,6 ] ] ] ],
	"should return [ [ 1, 2, 3 ], [ [ [ 4,5,6 ] ] ] ]" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 4 ),
	[ 1, 2, 3, [ [ 4, 5, 6 ] ] ], "should return [ 1, 2, 3, [ [ 4, 5, 6 ] ] ]" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 5 ),
	[ 1, 2, 3, [ 4, 5, 6 ] ], "should return [ 1, 2, 3, [ 4, 5, 6 ] ]" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 6 ),
	[ 1, 2, 3, 4, 5, 6 ], "should return [ 1, 2, 3, 4, 5, 6 ]" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 7 ),
	[ 1, 2, 3, 4, 5, 6 ], "should return [ 1, 2, 3, 4, 5, 6 ]" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]] ),
	[ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ], "should return [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ]" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], Infinity ),
	[ 1, 2, 3, 4, 5, 6 ], "should return [ 1, 2, 3, 4, 5, 6 ]" );

assert.deepEqual( leveld( [[1,2,3],[3,4,5]], 2 ),
	[ 1, 2, 3, 3, 4, 5 ], "should return [ 1, 2, 3, 3, 4, 5 ]" );

assert.deepEqual( leveld( [[[1,2,3],[3,4,5]],[4,5,6]], 2 ),
	[ [ 1, 2, 3 ], [ 3, 4, 5 ], 4, 5, 6 ], "should return [ [ 1, 2, 3 ], [ 3, 4, 5 ], 4, 5, 6 ]" );

assert.deepEqual( leveld( [[1,2,3],[3,4,5]] ),
	[ 1, 2, 3, 3, 4, 5 ], "should return [ 1, 2, 3, 3, 4, 5 ]" );

console.log( "ok" );
