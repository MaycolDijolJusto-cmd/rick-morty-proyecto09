
const url = "https://rickandmortyapi.com/api/character";


const contenedor = document.getElementById("contenedor");


fetch(url)
  .then(respuesta => respuesta.json())  
  .then(datos => {

    datos.results.forEach(personaje => {

    
      contenedor.innerHTML += `
        <div class="tarjeta aura-${personaje.status}">
          <img src="${personaje.image}">
          <h2>${personaje.name}</h2>
          <p>${personaje.species}</p>
          <span class="etiqueta etiqueta-${personaje.status}">
            ${personaje.status}
          </span>
        </div>
      `;

    });
  });