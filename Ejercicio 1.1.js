//2. Escriba un programa que reciba como entrada un número entero e indique si es o no un número de Fibonacci:
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
const isFibo = fibo.includes(fN)
if(isFibo === true){
    alert(`El numero ${fN} si es un numero Fibonacci`)
}
else{
    alert(`El numero ${fN} no es un numero Fibonacci`)
}
resultado=fibo.length
const lpt = fibo[resultado-2]
console.log(lpt);
console.log(resultado);
console.log(fibo);
console.log(enteros);