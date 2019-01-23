
//배열이기때문에 Array메소드
Array.prototype.isSubsetOf = function(arr) {
    var isSubset = true;
    
    for(var i = 0; i < this.length; i++) {
      if (arr.indexOf(this[i]) !== -1 ) {
        isSubset = true;
      } else {
        isSubset = false;
      }
    }
  
    return isSubset;
};

var a = ['commit', 'push'];
var b = a.isSubsetOf(['commit', 'rebase', 'push', 'blame']);
console.log(b);

// var b = ['merge', 'reset', 'hello'];
// b.isSubsetOf(['commit', 'rebase', 'push', 'blame']);





var num = 10;
var name = "Addy osumani";
var obj1 = {
  value : "first value"
};
var obj2 = {
  value : "second value"
};
var obj3 = obj2;

//매개변수
function change (num, name, obj1, obj2) {
  num = num * 10;
  name = "Paul Irish";
  obj1 = obj2;
  obj2.value = "new value";
};
change(num, name, obj1, obj2);

console.log(num);
console.log(name);
console.log(obj1.value);
console.log(obj2.value);
console.log(obj3.value);