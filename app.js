//Metodo para mostrar imagenes al cargar la pagina
function cargarImagenes() {
    for (let i = 0; i < 20; i++) {
        nuevaCard(i);
    }
}

//Evento para botn de inicio
const inicio = document.getElementById('home');
inicio.addEventListener('click', ()=>{
    limpiarVentana();
    const padre = document.getElementById('ventana-principal');
    const hijo = document.createElement('div');
    hijo.classList.add('wrapper-card');
    hijo.id = 'wrapper-card';
    padre.appendChild(hijo);
    cargarImagenes();
})

//Evento para capturar el scroll hasta el final de la pantalla
window.addEventListener('scroll', ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        for (let i = 0; i < 15; i++) {
            nuevaCard(i);
        }
    }
});

//Funcion para agregar imagenes al inicio y al hacer scroll
const nuevaCard = (i) =>{
    const cont = document.getElementById('wrapper-card');
    const nCard = document.createElement('div');
    nCard.classList.add('card');
    nCard.innerHTML = `
    <div>
        <button class="menu-superior">Guardar</button>
    </div>
    <img src="https://picsum.photos/500?random=${i} alt=" />
    <div class="lowermenu">
        <button><a href="">Link de descarga</a></button>
        <ion-icon name="download"></ion-icon>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
    `;
    cont.appendChild(nCard);
}

//Evento para mostrar pantalla de search
const search = document.getElementById('search');
search.addEventListener('click', (e)=>{
        const modalSearch = document.getElementById('modal-search');
        modalSearch.classList.add('modal-search-show');
});

//Evento para cerrar pantalla de search
const windowSearch = document.getElementById('modal-search');
windowSearch.addEventListener('click', (e)=>{
    if(e.target.id === 'modal-search'){
        cerrarSearch();
    }
})

//Evento para quitar busqueda reciente
const cerrar = document.getElementsByClassName('cerrarReciente');
for (const x of cerrar) {
    x.addEventListener('click', (e)=>{
        e.target.parentNode.remove();
    })
}

//Funcion para cerrar pantalla de search
function cerrarSearch() {
    const modalSearch = document.getElementById('modal-search');
    modalSearch.classList.remove('modal-search-show');
}

//Eventos para cargar imagenes de busquedas
const carros = document.getElementsByClassName('carro');
for (const carro of carros) {    
    carro.addEventListener('click', ()=>{
        cargarSearchResults('carros', 'carro');
    });
};

const motos = document.getElementsByClassName('moto');
for (const moto of motos) {
        moto.addEventListener('click', ()=>{
        cargarSearchResults('motos', 'moto');
    });
};
    
const tatoos = document.getElementsByClassName('tatoo');
for (const tatoo of tatoos) {
    tatoo.addEventListener('click', ()=>{
        cargarSearchResults('tatoos', 'tatoo');
    });
};

const animals = document.getElementsByClassName('animal');
for (const anim of animals) {
       anim.addEventListener('click', ()=>{
        cargarSearchResults('animales', 'animal');
    });
};
    
//Funcion para eliminar todas las imagenes en pantalla
function limpiarVentana() {
        cerrarSearch();
        const contenedor = document.getElementById('wrapper-card');
        for (const nodo of contenedor.children) {
            contenedor.remove(nodo);
        }
}

//Funcion que permite cargar resultados al hacer busqueda
function cargarSearchResults(folder, searchString){
    limpiarVentana();
    const padre = document.getElementById('ventana-principal');
    const hijo = document.createElement('div');
    hijo.classList.add('wrapper-card');
    hijo.id = 'wrapper-card';
    padre.appendChild(hijo);
    for (let i = 1; i<=30; i++) {
        num = i.toString();
        const cont = document.getElementById('wrapper-card');
        const nCard = document.createElement('div');
        nCard.classList.add('card');
        nCard.innerHTML = `
        <div>
            <button class="menu-superior">Guardar</button>
        </div>
        <img src="img/${folder}/${searchString+num}.jpg" />
        <div class="lowermenu">
            <button><a href="">Link de descarga</a></button>
            <ion-icon name="download"></ion-icon>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
        `;
        cont.appendChild(nCard);
    }
    hijo.scrollIntoView({behavior: "smooth"});
}

//Evento para abrir ventana derecha de la cuenta
const ventanaAccount = document.getElementById('items-down');
ventanaAccount.addEventListener('click', ()=>{
    const rightPanel = document.getElementById('right-panel');
    if(rightPanel.classList.contains('right-panel-show')){
        rightPanel.classList.remove('right-panel-show');
    }else{
        rightPanel.classList.add('right-panel-show');
    }
});

//Evento para cerrar ventana derecha de la cuenta
const panelAccount = document.getElementById('right-panel');
panelAccount.addEventListener('click', (e)=>{
    console.log('podeis cerrar');
    console.log(e.target);
})