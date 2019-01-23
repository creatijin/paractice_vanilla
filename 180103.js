/*
  Throttle
  일정 시간 동안 실행을 제한시켜주는 유틸리티 함수
*/


function throttle (fn, limit) {
     var shouldCall = true;
//   var time = null;
  
//   return function() {
    
//     clearTimeout(time);
    
//     time = setTimeout(function(){
      
//       fn("logs ");
      
//     },limit);
//   }
  
  
  return function throttled () {
    
    if (shouldCall) {
      var args = Array.prototype.slice.call(arguments);
      fn.apply(this, args);
      shouldCall = false;
      setTimeout(function(){
        shouldCall = true;
      }, limit);
      
    }
  }
}

var log = throttle(console.log, 1000);

log(2);
setTimeout(function(){
  log(5);
  log(2);
},2000);



