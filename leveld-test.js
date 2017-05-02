const assert = require( "assert" );
const leveld = require( "./leveld.js" );

assert.ok( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 1 ) );

assert.ok( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 2 ) );

assert.ok( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 3 ) );

assert.ok( "level 4" ,leveld( [[[[1,2,3],[[[4,5,6]]]]]], 4 ) );

assert.ok( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 5 ) );

assert.ok( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 6 ) );

assert.ok( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 7 ) );

assert.ok( leveld( [[[[1,2,3],[[[4,5,6]]]]]] ) );

assert.ok( leveld( [[[[1,2,3],[[[4,5,6]]]]]], Infinity ) );

assert.ok( leveld( [[1,2,3],[3,4,5]], 2 ) );

assert.ok( leveld( [[[1,2,3],[3,4,5]],[4,5,6]], 2 ) );

assert.ok( leveld( [[1,2,3],[3,4,5]] ) );

console.log( "ok" );
