const axiosInstance = require('./utils/axiosInstance');

/**
 * Fetches and parses the evolution chain for a specific Pokémon.
 * 
 * @param {string} pokemonName - Name of the Pokémon for which the evolution chain is desired.
 * @returns {object} - An object representing the evolution chain of the Pokémon.
 * @throws {Error} - Throws an error if unable to fetch the data.
 * 
 */
async function getEvolutionChain(pokemonName) {
    try {
        // Validate the Pokémon name to prevent potential security risks.
        if (typeof pokemonName !== 'string' || pokemonName.trim().length === 0) {
            throw new Error("Invalid Pokémon name provided.");
        }

        // Fetch general Pokémon data to obtain species URL.
        const { data: pokemonData } = await axiosInstance.get(`/pokemon/${pokemonName}`);
        
        // Use the species URL to fetch more detailed species data, especially the evolution chain URL.
        const speciesUrl = pokemonData.species.url.replace(axiosInstance.defaults.baseURL, '');
        const { data: speciesData } = await axiosInstance.get(speciesUrl);
        
        // Using the evolution chain URL obtained, fetch the complete evolution chain data.
        const evolutionChainUrl = speciesData.evolution_chain.url.replace(axiosInstance.defaults.baseURL, '');
        const { data: evolutionChainData } = await axiosInstance.get(evolutionChainUrl);

        // Parse and return the structured evolution chain data.
        return parseChain(evolutionChainData.chain);

    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Unable to fetch the evolution chain.");
    }
}

/**
 * Recursively parses a section of the evolution chain to capture all variations.
 * 
 * @param {object} chain - The section of the evolution chain being parsed.
 * @returns {object} - An object representing the parsed section of the evolution chain.
 * 
 */
function parseChain(chain) {
    const result = {
        name: chain.species.name,
        variations: []
    };

    // Parse all subsequent evolutions.
    chain.evolves_to.forEach(evolution => {
        result.variations.push(parseChain(evolution));
    });

    return result;
}

module.exports = getEvolutionChain;