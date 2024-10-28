let numeros = [2, 5, 8, 13, 16, 21];
let numeros2 = [];

numeros.forEach(function (numero){
    let numeroAleatorio = ''
    if(numero % 2 === 1){
        numeroAleatorio = Math.floor(Math.random() * 11)
        numero=numero*numeroAleatorio
        numeros2.push(numero)
    }
    else {
        numeros2.push(numero)
    }
})

console.log(numeros2)