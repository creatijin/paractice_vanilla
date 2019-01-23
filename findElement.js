/*

Time complexity = 시간복잡도

Big-O notation

Time complexity - O(N)

*/



var arr = [2,3,4,5,6];

function find (arr, target) {
	var resultIndex = 0;

	for(var i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			resultIndex = i;
			break;
		}
	}
	return resultIndex;
}

find(arr, 4);

