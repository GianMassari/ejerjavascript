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
        super(nombre,edad);
        this.profesor=undefined;
    }

    estudiando(){
        return "Estudiando con " + this.profesor;
    }

    setProfesor(profesor){
        this.profesor=profesor;
    }
}

class Profesor extends Persona{
 constructor(nombre,edad){
    super(nombre,edad);
    this.estudiantes=[];   
 }
enseniando(){
    console.log("Les enseño a estos alumnos:")
    this.estudiantes.forEach(element => {
        console.log(element);
    }); 
}
addEstudiante(Estudiante){
this.estudiantes.push(Estudiante);
Estudiante.setProfesor(this.nombre);
}
}



let gian = new Estudiante("Gian marco",20);
let christian = new Estudiante("Christian",20);

console.log(gian.presentarse());
gian.setProfesor("carlos");
console.log(gian.estudiando());
let carlos = new Profesor("Carlos",30);
console.log(carlos.presentarse());
carlos.enseniando();
carlos.addEstudiante(gian);
carlos.addEstudiante(christian);
carlos.enseniando();


