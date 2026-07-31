
const form = document.getElementById("gastoForm");
const gastoContainer = document.getElementById("gastoContainer");
class Gasto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.fecha = new Date();
    }
}
let listaGastos = [];
if (localStorage.getItem("Gastos")) {
    listaGastos = JSON.parse(localStorage.getItem("Gastos"));
}


form.addEventListener("submit", (e) => {

    e.preventDefault();
    const data = new FormData(form);
    listaGastos.push(
        new Gasto(data.get("nombre"),
            data.get("precio"),
            data.get("categoria")
        ))
    localStorage.setItem("Gastos", JSON.stringify(listaGastos));
    renderizarLista();
    form.reset();
});

function renderizeCartList() {
   
}
renderizeCartList();

}
