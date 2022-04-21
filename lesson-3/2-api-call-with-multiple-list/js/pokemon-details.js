console.log(document.location.search)
const queryString = window.location.search;

//in order to get the value
const params = new URLSearchParams(queryString);
console.log(params.get("name"));

const pokemonName = params.get("name")

const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

console.log(API_URL);

//select the container class .pokemon-detail

const pokemonDetails = document.querySelector(".pokemon-details");

async function getPokemonDetails() {
    try {
        const response = await fetch(API_URL);
        const singlePokemonDetails = await response.json();
        console.log('singlePokemonDetails: ', singlePokemonDetails);
        const pokemonWeight = singlePokemonDetails.weight;
        console.log('weight of the pokemon is', pokemonWeight, "kg");
        pokemonDetails.innerHTML = `<div>The PokeMon weight is : ${pokemonWeight}kg</div>`
    } catch (error) {
    }
}
getPokemonDetails();


