function rechazar(condicion,array){
return array.filter(e => !condicion(e));
}

var even=(element) => element %2 ===0;


   console.log(rechazar(even,[7,9,87,42]));

