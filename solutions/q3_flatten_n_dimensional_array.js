/* Write a Program to Flatten a given n-dimensional array */

const flatten = (myArray) => {
	var result = []
	result = myArray.flat(Infinity)
	return result
	console.log(result);

};

flatten(([1, [2, 3], [[4], [5]]]))
flatten(([1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]))


/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
