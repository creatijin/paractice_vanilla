
function deepEquals (one, two ) {
  
  if (one === two ){
    return true;
  }
  var oneKeys = Object.keys(one);
  var twoKeys = Object.keys(two);
  
  if (oneKeys.length !== twoKeys.length ) {
    return false;
  }
	
  if (!(one instanceof Object) || !(two instanceof Object))return false;
	

  if (oneKeys.length === 0) {
    return true;
  }
  
  for (var i=0; i < oneKeys.length; i++) {
		if (!deepEquals(one[oneKeys[i]], two[twoKeys[i]])) {
			return false;
		}
	}
  return true;
  
}

var obj1 = {
a: 1,
b: {
		c: 3
	}
}

var obj2 = {
a: 1,
b: {
		c: 3
	}
}
console.log(deepEquals(obj1, obj2));

//http://jason-moon.tistory.com/m/99

