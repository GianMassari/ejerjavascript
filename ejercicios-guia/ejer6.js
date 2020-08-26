
function aprobo(array){
    var aprobo=true;
    array.forEach(element => {
        if(element<4){
            aprobo=false;
        }
    });
    return aprobo
}
function quienesAprobaron(curso){
    var aprobaron=[];
        curso.forEach(element => {
       if(aprobo(element) === true){
           aprobaron.push(element);
       }
    });
    return console.log(aprobaron);
    }
    
    var curso=[[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];
quienesAprobaron(curso);
