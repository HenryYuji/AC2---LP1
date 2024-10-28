let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];
let numeros2 = [];

numeros.forEach(function (numero){
    numero=Math.ceil(numero)
    numeros2.push(numero)
})

console.log(numeros2)