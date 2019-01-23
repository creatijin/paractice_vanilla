/*
    characterFrequency('mississippi') ===
    [
        ['i', 4],
        ['s', 4],
        ['p', 2],
        ['m', 1]
    ]
*/
function characterFrequency (str) {
  var result = [];
  var temp = {};

  for (var i = 0; i < str.length; i++) {
      if(temp[str[i]]) {
      temp[str[i]]++;
      } else {
      temp[str[i]] = 1;
      }
  }
  console.log(temp);
  for (var prop in temp) {
      
      result.push([prop, temp[prop]]);
      console.log(result);
  }
  return result;
}
characterFrequency('mississippi');