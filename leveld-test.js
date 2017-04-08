
const leveld = require( "./leveld.js" );

console.log( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 1 ) );

console.log( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 2 ) );

console.log( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 3 ) );

console.log( "level 4" ,leveld( [[[[1,2,3],[[[4,5,6]]]]]], 4 ) );

console.log( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 5 ) );

console.log( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 6 ) );

console.log( leveld( [[[[1,2,3],[[[4,5,6]]]]]], 7 ) );

console.log( leveld( [[[[1,2,3],[[[4,5,6]]]]]] ) );

console.log( leveld( [[[[1,2,3],[[[4,5,6]]]]]], Infinity ) );

console.log( leveld( [[1,2,3],[3,4,5]], 1 ) );
