function hayAlgunNegativo(arr){
    let esNegativo=(element) => element <0;
    return arr.some(esNegativo);
}

console.log(hayAlgunNegativo([2,-3,9]));
