// Importing the getEvolutionChain function from our evolution fetcher module.
const getEvolutionChain = require('./evolutionFetcher');

// Fetch and display the evolution chain for the given Pokémon.
async function displayEvolutionChain(pokemonName) {
    try {
        // Fetch the evolution chain for the specified Pokémon.
        const data = await getEvolutionChain(pokemonName);

        // Log the formatted evolution chain data.
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        // Handle any potential errors from fetching or processing data.
        console.error("Error:", error.message);
    }
}

// Set a default Pokémon name (Pikachu) if none is provided.
const pokemonName = process.argv[2] || 'pikachu';

// Invoke the display function to initiate the fetching and logging process.
displayEvolutionChain(pokemonName);