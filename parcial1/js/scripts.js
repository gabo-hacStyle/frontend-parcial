//Scripts de la página principal

const changeText = () => {
    const newText = document.getElementById('newText');
    const newText2 = document.getElementById('newText2');
    const originalText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptate tenetur voluptatum. Incidunt id quos tempore doloribus at fugit explicabo doloremque beatae commodi, reiciendis, facilis sapiente, ratione amet aliquid impedit!';
    const newTextContent = 'Aqui ya dejamos de hablar de un simple lorem ipsum, estamos tratando de hacer algo más interesante';

    if (newText.innerHTML === originalText) {
        newText.innerHTML = newTextContent;
        newText2.innerHTML = newTextContent;
    } else {
        newText.innerHTML = originalText;
        newText2.innerHTML = originalText;
    }
};
const toggleDarkMode = () => {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const isDarkMode = body.classList.contains('bg-dark');

    if (isDarkMode) {
        body.classList.remove('bg-dark', 'text-light');
        body.classList.add('bg-light', 'text-dark');
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    } else {
        body.classList.remove('bg-light', 'text-dark');
        body.classList.add('bg-dark', 'text-light');
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    }
};

//Scritpts de modal
const openModal = (text) => {
    alert(text)
};

//Script de formulario de login
let contador = 0;
const userReal = 'gabo';
const passwordReal = '1234'

const  submitLogin = () => {
    const user = document.getElementById('nameLogin').value;
    const password = document.getElementById('exampleInputPassword1').value

    if(userReal ===  user && passwordReal === password){
        contador = contador +1;
        console.log('Curso agregado correctamente')
    } else {
        console.log('credenciales invalidas')
    }
}
