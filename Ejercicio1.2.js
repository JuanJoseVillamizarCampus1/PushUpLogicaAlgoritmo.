//3. Escriba un programa que muestres los m primeros números de Fibonacci, donde m es un número ingresado por el usuario:
const fN= parseInt(prompt(`Ingrese el numero de numeros Fibonacci que quiere ver`))
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
resultado = fibo.slice(0,fN)
console.log(resultado);
alert(`${resultado}`)
console.log(fibo);
console.log(enteros);


