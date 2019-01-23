function matchingBrackets (str) {
  if (str.length % 2 !== 0) {
    return false;
  }


  var temp = [];
  var brackets = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  for (var i = 0; i < str.length; i++) {
    //opening bracket
    if (brackets[str[i]]) {
      temp.push(str[i]);
       //closing bracket
    } else if ( str[i] === brackets[temp[temp.length - 1]] ) {
      temp.pop();
    }

  }


  return temp.length === 0;

}
var s1 = '{{()()}}';//true;
var s2 = '{([)]}';//false;


var a = matchingBrackets(s1);

console.log(a);