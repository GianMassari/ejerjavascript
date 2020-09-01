function cuantosCumplen(condicion,array){
    var cont=0;
array.forEach(element => {
    if (condicion(element)==true){
cont++;
    }
});
return cont;
}

    var even=(element) => element %2 ===0;

console.log(cuantosCumplen(even,[7,9,25,42]));