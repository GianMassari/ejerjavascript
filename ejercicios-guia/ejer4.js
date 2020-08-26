function algunoEsPar(array){
    var even=(element) => element %2 ===0;
    console.log(array.some(even));
   }

var arr = [1,2,3];
algunoEsPar(arr);