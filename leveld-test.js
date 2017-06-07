const assert = require( "assert" );
const leveld = require( "./leveld.js" );

assert.deepEqual( leveld( [ [ 1 ] ], 1 ), [ [ 1 ] ], "should be equal" );

assert.deepEqual( leveld( [ [ [ 1 ] ] ], 2 ), [ [ 1 ] ], "should be equal" );

assert.deepEqual( leveld( [ [ [ 1 ] ] ], 3 ), [ 1 ], "should be equal" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 2 ), [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ], "should be equal" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 3 ), [ [ 1, 2, 3 ], [ [ [ 4,5,6 ] ] ] ], "should be equal" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 4 ), [ 1, 2, 3, [ [ 4, 5, 6 ] ] ], "should be equal" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 5 ), [ 1, 2, 3, [ 4, 5, 6 ] ], "should be equal" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 6 ), [ 1, 2, 3, 4, 5, 6 ], "should be equal" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 7 ), [ 1, 2, 3, 4, 5, 6 ], "should be equal" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]] ), [ [ [ 1, 2, 3 ],[ [ [ 4, 5, 6 ] ] ] ] ], "should be equal" );

assert.deepEqual( leveld( [[[[1,2,3],[[[4,5,6]]]]]], Infinity ), [ 1, 2, 3, 4, 5, 6 ], "should be equal" );

assert.deepEqual( leveld( [[1,2,3],[3,4,5]], 2 ), [ 1, 2, 3, 3, 4, 5 ], "should be equal" );

assert.deepEqual( leveld( [[[1,2,3],[3,4,5]],[4,5,6]], 2 ), [ [ 1, 2, 3 ], [ 3, 4, 5 ], 4, 5, 6 ], "should be equal" );

assert.deepEqual( leveld( [[1,2,3],[3,4,5]] ), [ 1, 2, 3, 3, 4, 5 ], "should be equal" );

console.log( "ok" );
