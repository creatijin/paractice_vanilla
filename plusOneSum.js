/*

plusOneSum([1,2,3,4,5]); => 20;


*/

function plusOneSum (arr) {
    var result = arr.length;
    // var result = 0;
    for(var i = 0; i < arr.length; i++) {
        result += (arr[i]);
        // result += (arr[i]+1);
    }
    return result;
}
var a = plusOneSum([1,2,3,4]);