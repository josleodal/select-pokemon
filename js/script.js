const boton = document.getElementById('get-pokemon')

//pokemonSeleccionado = "bulbasaur"
let contenedor = document.getElementById('contenedor1')
let pokemonTipo = ""
    //nombre, imagen, tipo, altura y peso.
boton.addEventListener('click', function() {
    let pokemonSeleccionado = document.getElementById('pokemon-select').value

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado}`)
        .then((response) => {
            if (!response.ok) {

                throw new Error('La solicitud ha fallado')

            }
            return response.json()


        })

    .then((data) => {

        data.types.forEach((elemento => {

            pokemonTipo = elemento.type.name

        }))

        let pokemonNombre = data.name
        let pokemonImagen = data.sprites.front_default
        let pokemonAltura = data.height
        let pokemonPeso = data.weight

        console.log(data)

        let templatePokemon = `<div id="contenedor">
        <img src=${pokemonImagen} alt=${pokemonNombre}/>
        <p><span>Nombre:</span> ${pokemonNombre}</p> 
        <p><span>Tipo:</span> ${pokemonTipo}</p> 
        <p><span>Altura:</span> ${pokemonAltura}</p> 
        <p><span>Peso:</span> ${pokemonPeso}</p> 
        </div>`

        contenedor1.innerHTML = templatePokemon

    })









});
