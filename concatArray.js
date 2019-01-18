function concat(arrayOne, arrayTwo){

  var newArray = arrayOne.concat(arrayTwo)

  return newArray
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
