const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregarimagen');
const contenedorLigth = document.querySelector('.imagen-light');
const hamburger1 = document.querySelector('.hamburger');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        //console.log(imagen.getAttribute('src'));
        aparecerImagen(imagen.getAttribute('src'));        
    })
})

contenedorLigth.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLigth.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        hamburger1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLigth.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    hamburger1.style.opacity = '0';
}