function aprobo(array){
    let condicion=(element) => element >=4;
    return array.every(condicion);
}

function quienesAprobaron(curso){
    var arrAprobados = curso.filter(alumno => aprobo(alumno));
return arrAprobados;
}

var curso=[[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];
console.log(quienesAprobaron(curso));




