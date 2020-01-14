class Empleado
{
    nombre : String //declarar atributos de Empleado
    edad : number
    
    calcularSueldo()
    {}
}

class Cocinero extends Empleado //el extends implica generalización, lo hereda de Empleado
{
    calcularSueldo()
    {
        return 2500
    }
}

class Mesero extends Empleado
{
    //sobreescritura u override
    calcularSueldo()
    {
        return 1500
    }
}

class Llamador extends Empleado
{
    calcularSueldo()
    {
        return 1000
    }
}

//definir una función
let imprimirSueldo = (empleado : Empleado) =>
{
    console.log(`El sueldo es : ${empleado.calcularSueldo()}`)
}

let mainherencia = () => 
{
    let mozo = new Mesero()
    let cocinero = new Cocinero
    let llamador = new Llamador

    console.log(`El sueldo del mozo es ${mozo.calcularSueldo()}`)   //interpolación de string
    console.log(`El sueldo del cocinero es ${cocinero.calcularSueldo()}`)
    console.log(`El sueldo del llamador es ${llamador.calcularSueldo()}`)

    imprimirSueldo(mozo)
    imprimirSueldo(llamador)    //polimorfismo: cuando defines varios objetos que comparten la misma interface
}

mainherencia()