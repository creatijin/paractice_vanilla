


function matchingBrackets (str) {

  var resulte = '';
  var open = ['{', '[', '('];
  var close = ['}', ']', ')'];

  for (var i = 0; i < str.length; i++) {

    for (var j = 0; j < close.length; j++) {
      if(str[i] === open[j]) {

        if (str[i+1] === close[j]) {
          
          for (var k = 0; k < str.length; k++) {
            
          }

        }

      } else {
        resulte = false;
        return resulte;
      }
    }

  }
  

  return resulte;


}
matchingBrackets(s1);
var s1 = '{{()()}}';//true;
var s2 = '{([)]}';//false;

/*
1.close나오면 false 
2.순서에 안맞게 닫히면 false
3.갯수가 안맞으면 false
*/


