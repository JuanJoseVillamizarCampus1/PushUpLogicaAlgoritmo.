//1. Escriba un programa que reciba como entrada un número entero n, y entregue como salida el nésimo número de Fibonacci: 
const fN= parseInt(prompt(`Ingrese un numero`))
console.log(`EL numero ingresado es ${fN}`);
const fibo = [0,1];
const enteros = []
let n = 0;
let resultado ;
for (let x = 0; x < fN; x++) {
    enteros.push(x)
}
while (n<fN) {
    const siguiente =fibo[n]+fibo[n+1]
    console.log(n);
    fibo.push(siguiente)
    console.log(siguiente);
    n++
}
resultado=fibo.length
const lpt = fibo[resultado-2]
console.log(lpt);
console.log(resultado);
alert(`El numero fibonacci correspondiente al numero: ${fN} es ${lpt}`)
console.log(fibo);
console.log(enteros);


