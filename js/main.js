//Llamando botones
let cero = document.getElementById('0')
let uno = document.getElementById('1')
let dos = document.getElementById('2')
let tres = document.getElementById('3')
let cuatro = document.getElementById('4')
let cinco = document.getElementById('5')
let seis = document.getElementById('6')
let siete = document.getElementById('7')
let ocho = document.getElementById('8')
let nueve = document.getElementById('9')
let mas = document.getElementById('mas')
let menos = document.getElementById('menos')
let por = document.getElementById('por')
let dividir = document.getElementById('dividir')
let igual = document.getElementById('igual')
let punto = document.getElementById('punto')
let clear = document.getElementById('clear')
let c = document.getElementById('c')
let pantalla = document.getElementById('pantalla')

//Variables a definir
let num1 
let num2
let operacion

//Eventos
punto.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + '.'
}
cero.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 0
}
uno.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 1
}
dos.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 2
}
tres.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 3
}
cuatro.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 4
}
cinco.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 5
}
seis.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 6
}
siete.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 7
}
ocho.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 8
}
nueve.onclick = ()=>{
    pantalla.innerText = pantalla.textContent + 9
}

mas.onclick = ()=>{
    num1 = pantalla.textContent
    operacion = '+'
    limpiar()
}
menos.onclick = ()=>{
    num1 = pantalla.textContent
    operacion = '-'
    limpiar()
}
por.onclick = ()=>{
    num1 = pantalla.textContent
    operacion = 'x'
    limpiar()
}
dividir.onclick = ()=>{
    num1 = pantalla.textContent
    operacion = '/'
    limpiar()
}
igual.onclick = ()=>{
    num2 = pantalla.textContent
    resolver()
}
clear.onclick = ()=>{
    pantalla.innerText = ''
    num1=0
    num2=0
    operacion=''
}
c.onclick = ()=>{
    pantalla.innerText = ''
}

//Funciones
function limpiar(){
    pantalla.innerText = ''
}
function resolver(){
    let resultado = 0
    switch(operacion){
        case '+':
            resultado = parseFloat(num1)+parseFloat(num2)
            break
        case '-':
            resultado = parseFloat(num1)-parseFloat(num2)
            break
        case 'x':
            resultado = parseFloat(num1)*parseFloat(num2)
            break
        case '/':
            resultado = parseFloat(num1)/parseFloat(num2)
            break
    }
    pantalla.innerText = resultado
}





