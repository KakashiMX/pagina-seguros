const formulario = document.getElementById('formulario');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const submarca = document.getElementById('submarca');
const descripcion = document.getElementById('descripcion');
const edad = document.getElementById('edad');
const genero = document.getElementById('genero');
const codigo = document.getElementById('codigo');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    const numeroTelefono = '525530090679';
    const mensaje = encodeURIComponent(`Hola, mi nombre es ${nombre.textContent} me puedes dar información sobre el seguro, por favor`);
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');

});