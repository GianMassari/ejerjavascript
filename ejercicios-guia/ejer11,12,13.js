class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    presentarse(){
        return "Hola mi nombre es " + this.nombre + " Tengo " + this.edad + " años";
    }
}

class Estudiante extends Persona{

    constructor(nombre,edad){
        super(nombre,edad)
    }

    estudiando(){
        return "Estudiando con " + this.profesor;
    }

    setProfesor(profesor){
        this.profesor=profesor;
    }
}

class Profesor extends Persona{
 constructor(){
    var estudiantes=[];   
 }
enseñando(){
console.log(estudiantes); 
}
addEstudiante(unEstudiante){
estudiantes.push(unEstudiante);
unEstudiante.setProfesor(this.nombre);
}
}



var gian = new Estudiante("Gian marco",20);
console.log(gian.presentarse());
gian.setProfesor("carlos");
gian.estudiando();
