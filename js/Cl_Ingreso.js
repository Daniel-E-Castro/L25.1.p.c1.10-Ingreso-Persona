export default class Cl_Ingreso {
    constructor() {
        this.acumIngreso = 0;
        this.conPersonas = 0;
        this.menor = 9999999999;
        
    }
    procesar(Per) {
        this.acumIngreso += Per.ingreso
        this.conPersonas ++

        if(Per.ingreso < this.menor) {
            this.menor = Per.ingreso
            
        }

    }
    montoIngresoMenor() {
        return this.menor
    }
    ingresoPersona(){
        return this.acumIngreso / this.conPersonas
    }
}