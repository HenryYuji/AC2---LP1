let nome = prompt('Digite seu nome completo:')
let letras= nome.split('')
let contador = 0

letras.forEach(function(letra) {
    if(letra!=' '){
        contador++;
    }
});

console.log("Letras:", contador);