function algunoEsPar(array){
    let esPar=(element) => element %2 ===0;
    return array.some(esPar);
}

var arr = [1,2,3];
console.log(algunoEsPar(arr));