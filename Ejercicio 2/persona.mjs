// Exportar e Importar Clases 

export class Persona {
    // Propiedades 
    nombre;
    edad;

    constructor (nombre, edad){
        this.nombre = nombre; 
        this.edad = edad; 
    }

    // Método
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}