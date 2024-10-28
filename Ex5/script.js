let numerosOriginais = [4, 5, 6]
let novosNumeros = [1, 2, 3]

novosNumeros.forEach(function (numero){
    numerosOriginais.unshift(numero)
})

//numerosOriginais.unshift(novosNumeros[0],novosNumeros[1],novosNumeros[2]) versão sem forEach

console.log(numerosOriginais)