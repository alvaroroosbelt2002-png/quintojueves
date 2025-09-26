// 1. Sumar elementos de un array
function sumarArray() {
    let arr = [1, 2, 3, 4];
    return arr.reduce((acc, num) => acc + num, 0);
}

// 2. Número mayor y menor
function mayorMenor() {
    let arr = [10, 5, 20, 1]; 
    return { mayor: Math.max(...arr), menor: Math.min(...arr) };
}

// 3. Contar elementos pares
function contarPares() {
    let arr = [1, 2, 3, 4, 5, 6];
    return arr.filter(num => num % 2 === 0).length;
}

// 4. Ordenar un array
function ordenarArray() {
    let arr = [5, 3, 8, 1];
    return arr.sort((a, b) => a - b);
}

// 5. Buscar un elemento
function buscarElemento() {
    let arr = [10, 20, 30];
    let elem = 20;
    return arr.indexOf(elem);
}

// 6. Revertir un array
function revertirArray() {
    let arr = [1, 2, 3, 4];
    return arr.reverse();
}

// 7. Convertir a mayúsculas
function convertirMayusculas() {
    let arr = ["hola", "mundo"];
    return arr.map(str => str.toUpperCase());
}

// 8. Sumar solo positivos
function sumarPositivos() {
    let arr = [-5, 10, 20, -2];
    return arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
}

// 9. Obtener el primer múltiplo de 5
function primerMultiplo5() {
    let arr = [1, 2, 9, 10, 15];
    return arr.find(num => num % 5 === 0);
}

// 10. Tabla de multiplicar
function tablaMultiplicar() {
    let n = 5;
    let resultado = [];
    for (let i = 1; i <= 10; i++) {
        resultado.push(`${n} x ${i} = ${n * i}`);
    }
    return resultado;
}

// 11. Serie Fibonacci (10 números)
function fibonacci10() {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// 12. Adivinar un número
function adivinarNumero() {
    let numeroUsuario = 5;
    let numeroSecreto = 5;
    return numeroUsuario === numeroSecreto;
}

// 13. Convertir número a tabla (positiva o negativa)
function tablaMultiplicarPosNeg() {
    let n = -3;
    let resultado = [];
    let limite = Math.abs(n);
    for (let i = 1; i <= limite; i++) {
        resultado.push(`${n} x ${i} = ${n * i}`);
    }
    return resultado;
}

// 14. Validar entrada de usuario
function validarEntrada() {
    let num = 10;
    return num > 0;
}

// 15. Mostrar menú
function mostrarMenu() {
    let opcion = 2;
    switch (opcion) {
        case 1: return "Opción 1 seleccionada";
        case 2: return "Opción 2 seleccionada";
        case 3: return "Opción 3 seleccionada";
        default: return "Opción inválida";
    }
}

// 16. Sumar números impares entre 1 y 50
function sumaImpares() {
    let suma = 0;
    for (let i = 1; i <= 50; i += 2) {
        suma += i;
    }
    return suma;
}

// 17. Contador de intentos (ejemplo login)
function login() {
    let usuario = "admin";
    let clave = "1234";
    let usuarioCorrecto = "admin";
    let claveCorrecta = "1234";
    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        return "Acceso concedido";
    }
    return "Acceso denegado";
}

// 18. Sumar hasta que usuario ingrese 0
function sumarHastaCero() {
    let arr = [5, 10, 15, 0, 20];
    let suma = 0;
    let i = 0;
    while (i < arr.length && arr[i] !== 0) {
        suma += arr[i];
        i++;
    }
    return suma;
}

// 19. Serie Fibonacci hasta que supere 100
function fibonacci100() {
    let fib = [0, 1];
    while (fib[fib.length - 1] <= 100) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

// 20. Imprimir múltiplos de 3 hasta 50
function multiplos3() {
    let resultado = [];
    let i = 3;
    while (i <= 50) {
        resultado.push(i);
        i += 3;
    }
    return resultado;
}

// =====================================
// 👇 SOLO CAMBIA ESTA PARTE SEGÚN EL EJERCICIO QUE QUIERAS PROBAR
// =====================================
//console.log("1:", sumarArray());
//console.log("2:", mayorMenor());
//console.log("3:", contarPares());
//console.log("4:", ordenarArray());
//console.log("5:", buscarElemento());
//console.log("6:", revertirArray());
//console.log("7:", convertirMayusculas());
//console.log("8:", sumarPositivos());
//console.log("9:", primerMultiplo5());
//console.log("10:", tablaMultiplicar());
console.log("11:", fibonacci10());
//console.log("12:", adivinarNumero());
//console.log("13:", tablaMultiplicarPosNeg());
//console.log("14:", validarEntrada());
//console.log("15:", mostrarMenu());
//console.log("16:", sumaImpares());
//console.log("17:", login());
//console.log("18:", sumarHastaCero());
//console.log("19:", fibonacci100());
//console.log("20:", multiplos3());
