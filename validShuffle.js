/*
    var a = 'abc';
    var b = 'def';
    var c = 'dabfeca';

    var d = 'dhfeac';

*/


function validShuffle (a, b, c) {
   
    if ( (a + b).length !== c.length ) {
        return false;
    }

    var combination = (a+b).split(" ");
    //a+b의 배열을 하나로 합친다.
    var shuffled = c.split(" ");
    //c도 같은 방법으로 제거해준다.

    for (var i = 0; i < shuffled.length; i++) {
        var indexInCombination = combination.indexOf(shuffled[i]);

        if ( indexInCombination  ) {

        }

    }

}























function validShuffle (a, b, c) {

    if ((a + b).length !== c.length) {
        return false;
    }

    var combination = (a+b).split('');
    var shuffled = c.split('');
    //.split

    for (var i = 0; i < shuffled.length; i++) {
        var indexInCombination = combination.indexOf(shuffled[i]);
        
        if ( indexInCombination >= 0 ){
            combination.splice(indexInCombination, 1);
        }
    }

    return combination.length === 0;
};



function validShuffle (a, b, c) {

    if ((a + b).length !== c.length) {
        return false;
    }

    var combination = (a+b).split('');
    var shuffled = c.split('');
    //.split

    for (var i = 0; i < shuffled.length; i++) {
        var indexInCombination = combination.indexOf(shuffled[i]);
        
        if ( indexInCombination >= 0 ){
            combination.splice(indexInCombination, 1);
        }
    }
    console.log(combination);
    return combination.length === 0;
};

validShuffle(a,b,c);