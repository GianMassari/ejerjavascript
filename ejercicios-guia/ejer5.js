function aprobo(array){
    let condicion=(element) => element >=4;
    return array.every(condicion);
}

var notas=[8,6,4,4];
console.log(aprobo(notas));

//Las 2 funciones hacen lo mismo , queria probar el some




