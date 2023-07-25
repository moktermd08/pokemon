const express = require('express');
const app = express();
const port = 3000;

const getEvolutionChain = require('./src/index.js');

app.use(express.static('public')); // serve static files from the 'public' directory

app.get('/evolution', async (req, res) => {
    const pokemonName = req.query.name;
    if (!pokemonName) {
        return res.status(400).send('Please provide a Pokemon name');
    }

    try {
        const evolutionChain = await getEvolutionChain(pokemonName);
        res.json(evolutionChain);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});