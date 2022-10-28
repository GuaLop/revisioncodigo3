// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//Agregué al elemento Id por Name
const li = document.getElementById("lista-de-productos");
const $i = document.querySelector('input');
const botonDeFiltro = document.querySelector("button");

displayProductos(productos);

//Agregué la funcion porque no existia
function displayProductos(p){
  for (let i = 0; i < p.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = p[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', p[i].img);
  //modifiqué el orden de las entradas de las variables, agregué los elementos al div y agregué
  //el div al div "lista-de-productos"
    d.appendChild(imagen);
    d.appendChild(ti);
    li.appendChild(d);
  }
}

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  const productosFiltrados = filtrado(productos, texto);
//eliminé  todo el código repetido y solo mandé a llamar la funcion anterior con el arreglo
  displayProductos(productosFiltrados);
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  