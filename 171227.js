



// element.children 직속 하위 노드들 [<ELEMENT>]
function getElementsByClassName (element, className) {
    var result = [];

    for (var i = 0; i < element.children.length; i++) {
        if (element.children[i].classList.contains(className)) {
            result.push(element.children[i]);
        }
        //재귀함수
        //concat 배열합침
        if (element.children[i].children.length > 0) {
            result = result.concat(getElementsByClassName(element.children[i], className));
        }
    }

    return result;
}


var collection = getElementsByClassName(document.body, 'hello');
// console.log(collection);
console.log(collection.length);


