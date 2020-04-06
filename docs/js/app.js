// seleccionar  la clase container para poder mostrar las tarjetas
const container = document.querySelector(".container")
const coffees = [
  { name: "Café con amor", image: "images/coffee1.jpg" },
  { name: "Americano", image: "images/coffee2.jpg" },
  { name: "Decoraciones", image: "images/coffee3.jpg" },
  { name: "Con canela", image: "images/coffee4.jpg" },
  { name: "Cortado", image: "images/coffee5.jpg" },
  { name: "Mañanero", image: "images/coffee6.jpg" },
  { name: "Capuccino", image: "images/coffee7.jpg" },
  { name: "Solo", image: "images/coffee8.jpg" },
  { name: "Café al detalle", image: "images/coffee9.jpg" },
]

// Se crea un array con ellas y se recorre con un foreach para mostrarlas
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Sabor</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

//   Registrar el ServiceWorker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }