function aprobo(array){
    var aprobo=true;
    array.forEach(element => {
        if(element<4){
            aprobo=false;
        }
    });
    return aprobo
}
function aprobo1(array){ //Hice de 2 maneras la funcion por que lei que habia que usar el some
  var aprobo;
    var even=(element) => element < 4 ;
    if (array.some(even) == false){
        aprobo=true;;
    }else{
        aprobo= false;
    };
    return aprobo;
   }


var notas=[8,6,2,4];


console.log(aprobo(notas));
console.log(aprobo1(notas));
//Las 2 funciones hacen lo mismo , queria probar el some




