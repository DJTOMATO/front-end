//obtener elementose con id table y id contenido
var tabla = document.getElementById("tabla");
var contenido = document.getElementById("contenido");
console.log(tabla);
console.log(contenido);
//consumo de api con fetch
fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
        mostrartabla(datos);
    }).catch(error => console.log(error))

// funcion para obtener los datos del digimon y mostrarlo en la tabla con el id tabla y id contenido.
function mostrartabla(response) {
    //limpiar el elemento con id contenido
    contenido.innerHTML = ""
    //recorrer los datos obtenidos de la api
    for (let temp of response) {
        //para incrustar valores en el contenido dinamicamente se necesita `` comillas francesas y la anotacion o estructura ${variable}
        contenido.innerHTML +=
            `<td>${temp.name}</td>
        <td><img src="${temp.img}" width="50px" height ="50px" alt="${temp.name}"></td>
       <td>${temp.level}<td/>

            <div class="card" style = "width: 18rem;">
                <img src="${temp.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${temp.name}</h5>
                        <p class="card-text">${temp.level}</p>
                  
                    </div>
                </div>`
    }

}