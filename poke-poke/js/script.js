//My point 
// https://pokeapi.co/api/v2/pokemon?offset=20&limit=100
const APIUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=100"

//select the pokemons class 
const pokemonsContainer = document.querySelector(".pokemons")

async function getPokemonNames() {
    try {
        const response = await fetch(APIUrl);
        const responseJSON = await response.json();
        const pokemonData = responseJSON.results;
        for (let i = 0; i < pokemonData.length; i++) {
            pokemonsContainer.innerHTML += `<li><span>${pokemonData[i].name}</span></li>`
        }
    }
    catch (error) {
        console.log("abc does not exist", error)
    }
}
getPokemonNames()