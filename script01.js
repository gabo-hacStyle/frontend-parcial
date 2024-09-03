const validarRangoEdad = (input) => {
    let value = input.value.replace(/[^0-9]/g, '')
    console.log(value)
   if (value > 100) {
        input.value = input.max;
    }
}

const saludar = () => {
    //Edad
    let a = document.getElementById('message').value;
    //Nombre
    let c = document.getElementById('nombre').value;
    //correo
    let d = document.getElementById('correo').value;
    //Mensaje a display
    let b = document.getElementById('texto');

    //Condicional
    if(a < 18){
        b.innerHTML = `Bienvenido ${c}. \n 
        Tu correo quedó guardado como: ${d} \n 
        Y eres menor de edad con ${a} años`;
    } else {
        b.innerHTML = `
        Bienvenido ${c}. \n 
        Tu correo quedó guardado como: ${d} \n Y eres mayor de edad con ${a} años`;
    }

}
// function mostrar(i){
//     if(i =2){
//         document.getElementById('texto_card').innerHTML = `Esta bien, todo bien`;
//     } else {
//         document.getElementById('texto_card').innerHTML = `Esta mal, todo mal`;
//     }
// }

// function foo() {
//     let texto = 'Me gusta mucho programar';
// let resultado = texto.match(/[a-f]/g);
// alert(resultado);
// }
// foo()
